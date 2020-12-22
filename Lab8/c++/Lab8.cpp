#include <iostream>

#include <iomanip>

using namespace std;

int ** generateMatrix(int);
void arrayOut(int ** ,int);
int findMax(int **,int);
int main() {
  	int size;
  	cout << "enter size: ", cin >> size;
  	int ** matrix = generateMatrix(size);
  	arrayOut(matrix, size);
	cout<<endl<<"the biggest angle element: "<<findMax(matrix,size)<<endl;
}
int findMax(int ** arr, int size){
	int max = arr[0][0];
	if (max<arr[size-1][0])max=arr[size-1][0];
	if (max<arr[0][size-1])max=arr[0][size-1];
	if (max<arr[size-1][size-1])max=arr[size-1][size-1];
	return max;
}
// ������ ����������� ������� �������������� �������� ������� �� ������� �������� �� ����� ��������� ����
int ** generateMatrix(int size) {
  // ����������� ������
  int ** matrix = new int * [size];
  for (int i = 0; i < size; i++) {
    matrix[i] = new int[size];
  }

  int lowerElementCounter = 0;
  int higherElementCounter = 0;

  // ���������� ����� ������ ������� �������
  for (int i = 0; i < size; i++) {

    for (int j = 0; j < i + 1; j++) {
      ++lowerElementCounter;

      // ������ ����� �������� ���� �������� ������� ����
      // ���� i ������ 2, �� ����� ����������������� �� �������
      // ������_���� = j
      // ������_����� = i - j
      // ������ ������� 
      // �������� �������_���� �� �������� �������_����� � �������
      int leftMove, upMove;
      if (i % 2 == 0) {
        leftMove = j;
        upMove = i - j;
      } else {
        leftMove = i - j;
        upMove = j;
      }

      // ���������� ����� ���������� ������ ������� �� ��� ��������� 
      // ���������� ����� � ������� �������� ���� ���������� ������
      matrix[size - 1 - upMove][size - 1 - leftMove] = lowerElementCounter;
      // ���������� ����� � ����� ��������� ���� ���������� ������
      matrix[upMove][leftMove] = size * size - higherElementCounter;

      ++higherElementCounter;

      //cout << "(" << leftMove << ", " << upMove << ") ";

    }
  }
  cout << endl;
  return matrix;
}

void arrayOut(int ** matrix, int size) {
  // ���� ������
  for (int i = 0; i < size; ++i) {
    for (int j = 0; j < size; ++j) {
      cout << setw(3) << matrix[i][j] << ' ';
    }
    cout << endl;
  }
}
