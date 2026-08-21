# Contributing to OSS | Let's Connect

Thank you for your interest in contributing to the **OSS | Let’s Connect** website! We welcome contributions from everyone, whether you're a seasoned developer or just starting out in open source.

## How to Fork and Clone the Repository

1. **Fork the repository**: Click the "Fork" button at the top right of the [repository page](https://github.com/OSSConnect/oss-website) to create a copy in your own GitHub account.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/oss-website.git
   cd oss-website
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/OSSConnect/oss-website.git
   ```

## Branch Naming and Commit Guidelines

### Branch Naming
Create a new branch for each feature or bug fix. Use a descriptive name:
- `feature/add-navbar`
- `bugfix/fix-mobile-layout`
- `docs/update-readme`

```bash
git checkout -b feature/your-feature-name
```

### Commit Guidelines
We encourage clear and descriptive commit messages. Use the [Conventional Commits](https://www.conventionalcommits.org/) format:
- `feat: add new section to homepage`
- `fix: resolve issue with dark mode toggle`
- `docs: update contribution guidelines`
- `chore: update dependencies`

## Code/Style Expectations
- We use **ESLint** for code linting and standardizing styles. Run `pnpm run lint` before committing.
- Ensure your code follows the existing patterns (e.g., using Tailwind CSS utility classes and Lucide React icons).
- Use TypeScript and ensure there are no compilation errors.
- Always check that your code runs locally using `pnpm dev`.

## How to Raise an Issue and Pull Request

### Raising an Issue
- Check existing issues to see if your bug or feature request has already been reported.
- If not, open a new issue. Be as detailed as possible, including steps to reproduce bugs or a clear explanation of proposed features.

### Submitting a Pull Request
1. Ensure your code passes all linting checks (`pnpm run lint`) and builds successfully (`pnpm build`).
2. Push your branch to your fork: `git push origin feature/your-feature-name`.
3. Go to the original repository and click "Compare & pull request".
4. Fill out the PR template with details about your changes. Reference any related issues (e.g., "Fixes #123").

## Community Conduct and Review Process
- **Conduct:** We expect all contributors to adhere to a friendly, inclusive, and respectful environment. Harassment or abusive behavior will not be tolerated.
- **Review Process:** Once you submit a PR, maintainers will review it. We may request changes or ask clarifying questions. Once everything looks good, it will be merged into the main branch!
