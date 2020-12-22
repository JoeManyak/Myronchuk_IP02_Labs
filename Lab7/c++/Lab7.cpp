#include <iostream>
#include <cmath>

using namespace std;
int setArray(int*,int);
int dCalc(int*,int,int);
void minusDOdd(int*,int,int);
void returner(int*,int);
int main(){
	setlocale(LC_ALL, "Ukrainian");
	cout<<"¬ведiть розмiр масиву: ";
	int i,n;
	cin>>n;
	int a[n];
	int max = setArray(a,n);
	int d = dCalc(a,n,max);
	minusDOdd(a,n,d);
	returner(a,n);
}
int setArray(int a[],int n){
	int max;
	for (int i=0;i<n;i++){
		cout<<"a["<<i<<"] = ";
		cin>>a[i];
		if (i == 0 || a[i]>max){
			max = a[i];
		}
	};
	return max;
}
int dCalc(int a[],int n,int max){
	int d = 0;
	for (int i=0;i<n;i++){
		d += pow(max-a[i],2);
	}
	return d;
}
void minusDOdd(int a[],int n,int d){
	for (int i=0;i<n;i+=2){
		a[i]-=d;;
	}
}
void returner(int a[],int n){
	cout<<endl<<"–езультати:"<<endl;
	for(int i = 0;i<n;i++){
		cout<<"a["<<i<<"] = "<<a[i]<<endl;
	}
}
