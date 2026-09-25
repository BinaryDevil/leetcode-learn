"""#1268 Search Suggestions System
Sort once, then binary-search each prefix and return its first three matches.
Time: O(n log n * L + p log n + p^2) | Space: O(n + p), including the result.
Here L is the maximum product-name length and p is len(searchWord).
"""

from bisect import bisect_left


class Solution:
    def suggestedProducts(self, products, searchWord):
        products.sort()
        suggestions = []

        for end in range(1, len(searchWord) + 1):
            prefix = searchWord[:end]
            start = bisect_left(products, prefix)
            matches = []
            for product in products[start:start + 3]:
                if product.startswith(prefix):
                    matches.append(product)
                else:
                    break
            suggestions.append(matches)

        return suggestions
