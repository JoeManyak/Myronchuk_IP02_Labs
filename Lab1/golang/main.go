package main

import (
	"fmt"
	"math"
)

func main() {
	var a, b, c, r float64
	fmt.Print(">>> Вкажіть градусну міру кута a: ")
	_, _ = fmt.Scan(&a)
	fmt.Print(">>> Вкажіть градусну міру кута b: ")
	_, _ = fmt.Scan(&b)
	fmt.Print(">>> Вкажіть градусну міру кута c: ")
	_, _ = fmt.Scan(&c)
	fmt.Print(">>> Вкажіть радіус вписаного кола: ")
	_, _ = fmt.Scan(&r)
	if a+b+c == 180 {
		side1 := sideCalculate(r, a)
		side2 := sideCalculate(r, b)
		side3 := sideCalculate(r, c)
		fmt.Println(">>> Сторони трикутника рівні ", side1, ", ", side2, " і ", side3)
	} else {
		fmt.Println(">>> Сума кутів не рівна 180 :(")
	}
}
func toRadian(angle float64) float64 {
	return (angle * math.Pi) / 180
}
func sideCalculate(r, a float64) float64 {
	return 2 * r * math.Sin(toRadian(a))
}
