package main

import "fmt"

func main() {
	var count = 0
	for i := 10; i < 100; i++ {
		fmt.Println(i * 101)
		count++
	}
	fmt.Println("Кількість шуканих чисел:", count)
}
