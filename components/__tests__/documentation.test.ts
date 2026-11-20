import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '../..');
const documentExtensions = new Set(['.md', '.mdx', '.rst']);

const listDocuments = (directory: string): string[] =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) {
      if (
        ['.git', 'node_modules', '_site', 'coverage', 'dist', 'es', 'lib'].includes(entry.name)
      ) {
        return [];
      }
      return listDocuments(path.join(directory, entry.name));
    }

    return documentExtensions.has(path.extname(entry.name).toLowerCase())
      ? [path.relative(root, path.join(directory, entry.name))]
      : [];
  });

describe('Documentation', () => {
  it('only keeps English component documentation', () => {
    const documents = listDocuments(root);
    const nonComponentDocuments = documents.filter((file) => !file.startsWith('components/'));
    const chineseComponentDocuments = documents.filter(
      (file) =>
        file.startsWith('components/') &&
        /(?:zh-cn|zh_cn|_cn|\.cn)(?:\.|\/|$)/i.test(file),
    );

    expect(nonComponentDocuments).toEqual([]);
    expect(chineseComponentDocuments).toEqual([]);
  });
});
