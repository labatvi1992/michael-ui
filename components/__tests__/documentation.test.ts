import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '../..');
const documentExtensions = new Set(['.md', '.mdx', '.rst']);
const retainedRootDocuments = new Set([
  'AGENTS.md',
  'CLAUDE.md',
  'DESIGN.md',
  'README.md',
  'SECURITY.md',
]);

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
  it('keeps component documentation and selected repository guides', () => {
    const documents = listDocuments(root);
    const unexpectedDocuments = documents.filter(
      (file) =>
        !file.startsWith('components/') &&
        !file.startsWith('.github/') &&
        !file.startsWith('.agents/') &&
        !retainedRootDocuments.has(file),
    );
    const chineseComponentDocuments = documents.filter(
      (file) =>
        file.startsWith('components/') &&
        /(?:zh-cn|zh_cn|_cn|\.cn)(?:\.|\/|$)/i.test(file),
    );

    expect(unexpectedDocuments).toEqual([]);
    expect(chineseComponentDocuments).toEqual([]);
  });
});
