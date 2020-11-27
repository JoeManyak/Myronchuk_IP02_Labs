package main

import (
	"fmt"
	"math"
)

func main() {
	var s1, s2 = 0.0, 0.0
	for i := 1.0; i <= 100; i++ {
		s1 += math.Pow(-1, i) * (1 / i)
		s2 += math.Pow(-1, i+1) * (1 / i)
		fmt.Println("i: ", i, " s1: ", s1, " s2:", s2) //Для демонстрації
	}
	var res int
	if s1 > s2 {
		res = 1
	} else if s2 > s1 {
		res = -1
	} else {
		res = 0
	}
	fmt.Println(res)
}
