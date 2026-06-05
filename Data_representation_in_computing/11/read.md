## for  1 byte characters
patteren 0xxxxxxx
range U+0000 to U+007F





## for  2 bytes characters
 pattern 110xxxxx 10xxxxxx
 eg      10100001
 range U+0080 to U+07FF

## for  3 bytes characters
Bit pattern 1110xxxx 10xxxxxx 10xxxxxx
eg           11100000 10111100 10011111
             1110 0000  1011 1100  1001 1111
RangeU+0800 to U+FFFF

## for  4 bytes characters
Bit pattern 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
Range U+10000 to U+10FFFF
