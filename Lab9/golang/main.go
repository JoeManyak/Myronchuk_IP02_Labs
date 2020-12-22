package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	resSlice := readLineOfWords()
	fmt.Println("Список слів в рядку:")
	for _, el := range resSlice {
		fmt.Println(el)
	}
	resMap, maxIndex := deleteOddsAndFindMax(resSlice)
	fmt.Println("Результат:")
	for i := 0; i < len(resMap); i++ {
		fmt.Println(resMap[i])
	}
	fmt.Println("Найбільше слово:", resMap[maxIndex])
}
func deleteOddsAndFindMax(resSlice []string) (map[int]string, int) {
	resMap := make(map[int]string)
	var maxIndex = 0
	var max = 0
	for i := 0; i < len(resSlice); i += 2 {
		resMap[i/2] = resSlice[i]
		if len(resSlice[i]) > max {
			max = len(resSlice[i])
			maxIndex = i / 2
		}
	}
	return resMap, maxIndex
}
func readLineOfWords() []string {
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		s := scanner.Text()
		resSlice := strings.Split(s, " ")
		return resSlice
	}
	return nil
}
