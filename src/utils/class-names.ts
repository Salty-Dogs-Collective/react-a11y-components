export const mergeOptionalClassNameWithList = (classNameList: string[], className?: string) => {
  return (className ? [...className.split(' '), ...classNameList] : classNameList).join(' ');
};

if (import.meta.vitest) {
  const { it, describe } = import.meta.vitest;

  describe.concurrent('class-names.ts', () => {
    it('merge with one class', async ({ expect }) => {
      expect(mergeOptionalClassNameWithList(['a'], 'b')).toEqual('b a');
    });

    it('merge with two classes', async ({ expect }) => {
      expect(mergeOptionalClassNameWithList(['a'], 'b c')).toEqual('b c a');
    });

    it('merge with no class', async ({ expect }) => {
      expect(mergeOptionalClassNameWithList(['a'])).toEqual('a');
    });
  });
}
