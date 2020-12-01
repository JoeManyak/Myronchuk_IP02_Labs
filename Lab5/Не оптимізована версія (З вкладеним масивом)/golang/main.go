package main

import "fmt"

func main() {
	var count int

	for i := 10; i < 100; i++ {
		for j := 10; j < 100; j++ {
			if i == j {
				fmt.Println(i*100 + j)
				count++
			}
		}
	}

	fmt.Println("Кількість шуканих чисел:", count)
}
