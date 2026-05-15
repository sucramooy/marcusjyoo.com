% *************************************************************************
%   FoodAdditiveFrequencyAnalysis.m

%   PROGRAM DESCRIPTION:
%   FOOD ADDITIVE FREQUENCY ANALYSIS

%   @param
%   @return

%   @author: Marcus Yoo on 15-May-2026
%**************************************************************************
clear variables; close all; clc;

filename = 'FoodAdditiveFrequencyAnaysisData.txt';
data = readtable(filename, 'VariableNamingRule', 'preserve');

categories = data{:, 1};
ingredients_list = data{:, 2};

empty_idx = cellfun(@(x) isempty(x) || (ischar(x) && all(isspace(x))), ingredients_list);
if any(empty_idx)
    fprintf('Warning: %d rows have no ingredients and will be removed\n', sum(empty_idx));
    categories(empty_idx) = [];
    ingredients_list(empty_idx) = [];
end

num_products = length(categories);
fprintf('Loaded %d products\n', num_products);

all_ingredients_by_product = cell(num_products, 1);
for i = 1:num_products
    if ischar(ingredients_list{i}) || isstring(ingredients_list{i})
        parts = strsplit(ingredients_list{i}, ',');
        parts = strtrim(parts);
        parts = parts(~cellfun(@isempty, parts));
        all_ingredients_by_product{i} = lower(parts);
    else
        all_ingredients_by_product{i} = {};
    end
end

all_ingredients = [];
for i = 1:num_products
    all_ingredients = [all_ingredients, all_ingredients_by_product{i}];
end

[unique_ingredients, ~, ~] = unique(all_ingredients);
unique_ingredients = unique_ingredients(~cellfun(@isempty, unique_ingredients));
num_ingredients = length(unique_ingredients);
fprintf('Total unique ingredients found: %d\n', num_ingredients);

% remove stopwords
stopwords = {
    'contains', 'less', 'than', 'and/or', 'or', 'for', 'with', 'added', 'to', 'maintain', 'freshness', 'quality', 'preserve', 'protect', 'color', 'flavor', 'and', 'of', 'in', 'by', 'from', 'a', 'an', 'the', 'this', 'that', 'these', 'those', 'is', 'are', 'was', 'were' };
keep_idx = ~ismember(unique_ingredients, stopwords);
fprintf('After removing %d stopwords: %d unique ingredients remain\n', ...
    sum(~keep_idx), sum(keep_idx));
unique_ingredients = unique_ingredients(keep_idx);
num_ingredients = length(unique_ingredients);

ingredient_to_idx = containers.Map();
for i = 1:num_ingredients
    ingredient_to_idx(unique_ingredients{i}) = i;
end


ingredient_matrix = zeros(num_products, num_ingredients);


unique_cats = unique(categories);
num_cats = length(unique_cats);
cat_counts = zeros(num_cats, num_ingredients);
cat_product_counts = zeros(num_cats, 1);


for i = 1:num_products
    current_ingredients = all_ingredients_by_product{i};
    current_cat = categories{i};
    
    cat_idx = find(strcmp(unique_cats, current_cat));
    cat_product_counts(cat_idx) = cat_product_counts(cat_idx) + 1;
    

    unique_in_product = unique(current_ingredients); 
    for j = 1:length(unique_in_product)
        if ingredient_to_idx.isKey(unique_in_product{j})
            ing_idx = ingredient_to_idx(unique_in_product{j});
            ingredient_matrix(i, ing_idx) = ingredient_matrix(i, ing_idx) + 1;
            cat_counts(cat_idx, ing_idx) = cat_counts(cat_idx, ing_idx) + 1;
        end
    end
end

overall_counts = sum(ingredient_matrix, 1);
overall_percent = overall_counts / num_products * 100;
cat_percentages = cat_counts ./ cat_product_counts * 100;  % Each column is an ingredient

[overall_percent_sorted, sort_idx] = sort(overall_percent, 'descend');
ingredients_sorted = unique_ingredients(sort_idx);
overall_counts_sorted = overall_counts(sort_idx);

fprintf('\n');
fprintf('================================================================\n');
fprintf('TOP 50 MOST COMMON INGREDIENTS (across all %d products)\n', num_products);
fprintf('================================================================\n');
fprintf('%-45s | %-10s | %-10s\n', 'Ingredient', 'Count', 'Percent');
fprintf('%-45s-+-%-10s-+-%-10s\n', repmat('-',1,45), repmat('-',1,10), repmat('-',1,10));

for i = 1:min(50, num_ingredients)
    if overall_counts_sorted(i) > 0
        fprintf('%-45s | %-10d | %6.1f%%\n', ...
            ingredients_sorted{i}, overall_counts_sorted(i), overall_percent_sorted(i));
    end
end

fprintf('\n\n');
fprintf('================================================================\n');
fprintf('PER-CATEGORY TOP 20 INGREDIENTS\n');
fprintf('================================================================\n');

for c = 1:num_cats
    fprintf('\n--- %s (%d products) ---\n', unique_cats{c}, cat_product_counts(c));
    fprintf('%-45s | %-10s\n', 'Ingredient', 'Percent');
    fprintf('%-45s-+-%-10s\n', repmat('-',1,45), repmat('-',1,10));
    
    [cat_percent_sorted, cat_sort_idx] = sort(cat_percentages(c, :), 'descend');
    shown = 0;
    for j = 1:num_ingredients
        if cat_percent_sorted(j) > 0 && shown < 20
            fprintf('%-45s | %6.1f%%\n', ...
                unique_ingredients{cat_sort_idx(j)}, cat_percent_sorted(j));
            shown = shown + 1;
        end
    end
end

fprintf('\n\n');
fprintf('================================================================\n');
fprintf('SAVING CSV FILES\n');
fprintf('================================================================\n');

num_rows = length(ingredients_sorted);
overall_table = table(ingredients_sorted(:), overall_counts_sorted(:), overall_percent_sorted(:), 'VariableNames', {'Ingredient', 'Count', 'Percent'});
writetable(overall_table, 'ingredient_frequency_overall.csv');
fprintf('Saved: ingredient_frequency_overall.csv (%d rows)\n', height(overall_table));

[~, top_idx] = sort(overall_percent, 'descend');
top_n = min(100, num_ingredients);
top_ingredients = unique_ingredients(top_idx(1:top_n));
top_ingredient_indices = top_idx(1:top_n);

cat_matrix_small = cat_percentages(:, top_ingredient_indices)';
cat_matrix_table = array2table(cat_matrix_small, ...
    'VariableNames', matlab.lang.makeValidName(strcat(unique_cats)), ...
    'RowNames', top_ingredients);
writetable(cat_matrix_table, 'ingredient_frequency_by_category_top100.csv', 'WriteRowNames', true);
fprintf('Saved: ingredient_frequency_by_category_top100.csv (%d ingredients x %d categories)\n', ...
    top_n, num_cats);



ingredient_count_per_product = cellfun(@length, all_ingredients_by_product);
summary_table = table(categories, ingredient_count_per_product, ...
    'VariableNames', {'Category', 'NumIngredients'});
writetable(summary_table, 'product_ingredient_counts.csv');
fprintf('Saved: product_ingredient_counts.csv\n');

%% VISUALIZATIONS

combined_percentages = [overall_percent; cat_percentages];

% heatmap
if num_cats >= 2 && top_n >= 2
    figure('Name', 'Ingredient Heatmap by Category', 'Position', [150, 150, 1000, 800]);
    % Limit to top 30 ingredients for readability
    heatmap_n = min(30, top_n);
    heatmap_data = combined_percentages(:, top_idx(1:heatmap_n))';
    
    imagesc(heatmap_data);
    colormap(jet);
    colorbar;
    clim([0, 100]);
    xlabel('Category');
    ylabel('Ingredient');
    title('Ingredient Frequency by Category (%)');
    set(gca, 'XTick', 1:num_cats + 1, 'XTickLabel', ["COMBINED"; unique_cats]);
    set(gca, 'YTick', 1:heatmap_n, 'YTickLabel', top_ingredients(1:heatmap_n));
    xtickangle(45);
    saveas(gcf, 'ingredient_heatmap.png');
    fprintf('Saved: ingredient_heatmap.png\n');
end


















%% 13. PRINT SUMMARY STATISTICS
fprintf('\n');
fprintf('================================================================\n');
fprintf('SUMMARY STATISTICS\n');
fprintf('================================================================\n');
fprintf('Total products analyzed:        %d\n', num_products);
fprintf('Total unique ingredients:       %d\n', num_ingredients);
fprintf('Average ingredients per product: %.1f\n', mean(ingredient_count_per_product));
fprintf('Median ingredients per product: %.1f\n', median(ingredient_count_per_product));
fprintf('Min ingredients per product:    %d\n', min(ingredient_count_per_product));
fprintf('Max ingredients per product:    %d\n', max(ingredient_count_per_product));

fprintf('\nIngredient counts by category:\n');
for c = 1:num_cats
    idx = strcmp(categories, unique_cats{c});
    fprintf('  %-15s: n=%d, avg=%.1f ingredients\n', ...
        unique_cats{c}, sum(idx), mean(ingredient_count_per_product(idx)));
end

%% 14. FIND MOST DISTINCTIVE INGREDIENTS PER CATEGORY
% (Ingredients that appear much more frequently in one category than others)
fprintf('\n');
fprintf('================================================================\n');
fprintf('MOST DISTINCTIVE INGREDIENTS PER CATEGORY\n');
fprintf('(Ingredients that appear >2x more often in this category)\n');
fprintf('================================================================\n');

for c = 1:num_cats
    cat_pct = cat_percentages(c, :);
    other_pct = zeros(1, num_ingredients);
    for oc = 1:num_cats
        if oc ~= c
            other_pct = other_pct + cat_percentages(oc, :);
        end
    end
    other_pct = other_pct / (num_cats - 1);
    
    ratio = cat_pct ./ (other_pct + 0.01);  % Add small constant to avoid division by zero
    
    [ratio_sorted, ratio_idx] = sort(ratio, 'descend');
    
    fprintf('\n--- %s ---\n', unique_cats{c});
    count_distinctive = 0;
    for j = 1:num_ingredients
        if ratio_sorted(j) > 2 && cat_pct(ratio_idx(j)) > 15 && count_distinctive < 10
            fprintf('  %-40s (%.0f%% vs %.0f%% avg other, ratio=%.1f)\n', ...
                unique_ingredients{ratio_idx(j)}, ...
                cat_pct(ratio_idx(j)), other_pct(ratio_idx(j)), ratio_sorted(j));
            count_distinctive = count_distinctive + 1;
        end
    end
    if count_distinctive == 0
        fprintf('  (No highly distinctive ingredients found)\n');
    end
end

fprintf('\n================================================================\n');
fprintf('ANALYSIS COMPLETE!\n');
fprintf('================================================================\n');