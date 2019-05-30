module.exports = {
    rules: {
        'type-enum': [2, 'always', [
            "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert", "dev"
        ]],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never']
    },
    extends: ['@commitlint/config-conventional'],
}