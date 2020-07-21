# Various TS-Tools
> [Live-Example]() | [GitHub-Home](https://github.com/MikeMitterer/ts-tools)

Noting spectacular here...

### range
```typescript
    test('Number of iterations', () => {
        let iterations = 0;
        range(0, 10).forEach(() => iterations++);

        expect(iterations).toBe(11);
    });
```

### loop
```typescript
    test('loop with values', () => {
        let iterations = 0;
        let sum = 0;
        loop(1, 3).through((value: number) => {
            sum += value;
            iterations++;
        });

        expect(iterations).toBe(3);
        expect(sum).toBe(6);

        iterations = 0;
        sum = 0;
        loop(3, 1).through((value: number) => {
            sum += value;
            iterations++;
        });
        expect(iterations).toBe(3);
        expect(sum).toBe(6);
    });
``` 






