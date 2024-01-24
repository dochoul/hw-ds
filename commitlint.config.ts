const czConfig = require('/Users/leo/Desktop/project/template/react-vite-template/.cz-config.js');

const commitFolders = ['setting'];

const typeList = czConfig.types.map((v) => v.value);

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'develop-rule': [2, 'always'],
    'type-enum': [2, 'always', typeList],
  },
  plugins: [
    {
      rules: {
        'develop-rule': ({ scope }) => {
          return [
            commitFolders.some((folder) => folder === scope),
            `\n${commitFolders.map((folder) => `${folder}\n`).join('')}
  위 ${commitFolders.length} 가지 중 한 가지는 반드시 스코프에 포함되어야 합니다.
  [name] 뒤에 메시지 입력은 필수입니다.
  
  ex) feat(any scope): 기본 설정`,
          ];
        },
      },
    },
  ],
};
