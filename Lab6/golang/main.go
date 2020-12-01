package main

import (
	"fmt"
	"math"
)

func main() {
	var a, b, n float64
	fmt.Print("a: ")
	_, _ = fmt.Scanln(&a)
	fmt.Print("b: ")
	_, _ = fmt.Scanln(&b)
	fmt.Print("n: ")
	_, _ = fmt.Scanln(&n)
	s1 := calculateArea(0.0, math.Pi, n, func1)
	s2 := calculateArea(a, b, n, func2)
	fmt.Println("Result:", s1+s2)
}
func calculateArea(localA, localB, localN float64, function func(float64) float64) float64 {
	h := (localB - localA) / localN
	var s = 0.0
	for i := 1.0; i <= localN; i++ {
		xi := localA + i*h - h/2
		s += function(xi)
	}
	return s * h
}

func func1(x float64) float64 {
	return math.Log(2 + math.Sin(x))
}

func func2(x float64) float64 {
	return math.Pow(math.Atan(x), 2)
}
