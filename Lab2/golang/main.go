package main

import (
	"fmt"
	"math"
)

func main() {
	var res bool
	var x, y float64
	fmt.Print(">>> x= ")
	_, _ = fmt.Scan(&x) //Зчитування
	fmt.Print(">>> y= ")
	_, _ = fmt.Scan(&y)          //Зчитування
	if math.Sqrt(x*x+y*y) <= 1 { // перевірка чи потрапляє в одиничне коло
		if x >= 0 { // перевірка в яку півплощину попадає точка
			if y >= 0 { //перевірка потрапляння в чверть
				res = y >= x //Так як результат це булева змінна, ми можемо записати це як такий вираз
			} else {
				res = y >= -x
			}
		} else {
			if y > 0 {
				res = y < -x
			} else {
				res = y < x
			}
		}
	} else {
		res = false
	}
	fmt.Println(">>> Result: ", res)
}
