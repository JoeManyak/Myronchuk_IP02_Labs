#include <iostream>
#include <cmath>

using namespace std;

int main(){
	setlocale(LC_ALL, "Ukrainian");
	cout<<"¬ведiть розмiр масиву: ";
	int i,n;
	cin>>n;
	int max,a[n];
	for (i=0;i<n;i++){
		cout<<"a["<<i<<"] = ";
		cin>>a[i];
		if (i == 0 || a[i]>max){
			max = a[i];
		}
	};
	int d = 0;
	for (i=0;i<n;i++){
		d += pow(max-a[i],2);
	}
	cout<<endl<<"–езультати:"<<endl;
	for (i=0;i<n;i+=2){
		a[i]-=d;;
		cout<<"a["<<i<<"] = "<<a[i]<<endl;
	}
}
