#include <stdio.h>

int sum (a, b) {
  return a + b;
};

int main()
{
  int a, b;
  scanf("%d %d", &a, &b);
  printf("%d", sum(a, b));
  return 0;
}
