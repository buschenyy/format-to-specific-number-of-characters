# format-to-specific-number-of-characters
This is a function that returns a formatted number with a maximum length of digits. The formatting is based on the iPhone calculator's formatting.

The `maxLength` variable defines the maximum number of digits allowed in the returned value. 

The `getFormatNum()` function takes a `num` parameter, which is the number to be formatted. 

1. The function first checks if the number of digits in `num` is less than or equal to `maxLength`. If it is, the function simply returns `num` converted to a string. 

2. If `num` has more digits than `maxLength`, the function first checks if the absolute value of `num` as an integer has more digits than `maxLength`. If so, the function returns the result of calling the `toPrecision()` method of `num` with an argument of 1, which formats the number to scientific notation with one digit before the decimal point.

3. If the integer part of `num` has fewer digits than `maxLength`, the function checks if `num` is an integer. If `num` is not an integer, it returns `num` formatted to `maxLength` digits after the decimal point using the `toFixed()` method. 

4. Finally, if `num` is an integer with fewer digits than `maxLength`, the function simply returns `num` converted to a string.
