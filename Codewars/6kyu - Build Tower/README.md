# [6kyu - Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b)

<p><strong>Description:</strong></p>

<p>WBuild a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:</p>

<pre>
[
  "  *  ",
  " *** ", 
  "*****"
]
</pre>

## Solution 1

```ts
export const towerBuilder = (nFloors: number): string[] => {
  const result: string[] = [];
  const space: string = " ";
  const char: string = "*";
  for (let i: number = 0; i < nFloors; i++) {
    result.push(
      space.repeat(nFloors - 1 - i) +
        char.repeat(i * 2 + 1) +
        space.repeat(nFloors - 1 - i)
    );
  }

  return result;
};
```
