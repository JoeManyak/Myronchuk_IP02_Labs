package main

import "fmt"

func main() {
	var count = 0
	for i := 1000; i < 10000; i++ {
		if i%101 == 0 {
			count++
			fmt.Println(count, ": ", i)
		}
	}

	fmt.Println("Кількість шуканих чисел:", count)
}
