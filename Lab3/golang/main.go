package main

import (
	"fmt"
	"math"
)

func main() {
	var s, x, fact, e, dif, i float64
	fmt.Print(">>> x= ")
	_, _ = fmt.Scan(&x)
	fmt.Print(">>> e= ")
	_, _ = fmt.Scan(&e)
	i = 1
	s = 1
	fact = 2
	dif = (math.Pow(-1, i) * math.Pow(x, 2*i)) / fact
	for math.Abs(dif) > e {
		s += dif
		i++
		fact *= 2 * i * (2*i - 1)
		dif = (math.Pow(-1, i) * math.Pow(x, 2*i)) / fact
	}
	fmt.Println("result: ", s)
}
