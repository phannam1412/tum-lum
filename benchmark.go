
package main

import (
    "fmt"
    "time"
)

func main() {
    start := time.Now().UnixNano() / int64(time.Millisecond);
    result := 0;
    for a :=0;a < 100000000;a++ {
        result = result + 12345;
        result = result * 3;
        if result > 1000000 {
            result = result % 1000000;
        }
        result = result / 2;
    }
    end := time.Now().UnixNano() / int64(time.Millisecond);
    fmt.Printf("execution time: %d ms\n", end - start);
}
