#include <iostream>
#include<fstream>
#include<string>
using namespace std;
struct Employee
{
    string name;
    int ID;
    string Department;
    int salary;
    char adderss[12];
    int contact;
    string emailID;
    string position;
    int experience;
} emp[20];
int main()
{
    FILE *fp;
    fp = fopen("database.txt", "w");
    if (fp == NULL)
        cout << "Error!";
    else
    {
        for (int i = 0; i < 10; i++)
        {
            cout << "Enter Your Name: ";
            cin >> emp[i].name;
            cin.ignore();
            fflush(stdin);
            cout << "Enter Your ID: ";
            cin >> emp[i].ID;
            cout << "Enter department: ";
            cin >> emp[i].Department;
            cout << "Enter salary: ";
            cin >> emp[i].salary;
            cout << "Enter address: ";
            cin >> emp[i].adderss;
            cout << "Enter contact Number: ";
            cin >> emp[i].contact;
            cout << "Enter email ID: ";
            cin >> emp[i].emailID;
            cout << "Enter position you are at: ";
            cin >> emp[i].position;
            cout << "Enter experience in years: ";
            cin >> emp[i].experience;
        }
        fwrite(emp, sizeof(struct Employee), 10, fp);
    }
    fclose(fp);
    return 0;
}