module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var max = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                var count = 1;
                count += this.calculateDepth(element);
                if (count > max) {
                    max = count;
                }
            }
        });
        return max;
    }
};