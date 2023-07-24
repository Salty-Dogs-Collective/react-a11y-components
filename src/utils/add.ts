export const add = (a: number, b: number) => a + b;

if (import.meta.vitest) {
    const { it, describe } = import.meta.vitest
    
    describe.concurrent('add.ts', () => {
        it('1 + 2 = 3', async ({ expect }) => {
            expect(add(1, 2)).toEqual(3);
        });

        it('-1 + 2 = 1', async ({ expect }) => {
            expect(add(-1, 2)).toEqual(1);
        });
    });
    
}