# Git Setup & Commands Guide

## Setup

### SSH Configuration

1. Create a repository first on GitHub
2. Generate SSH key using:

   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_personal
   ```

3. Copy the public key:

   ```bash
   cat ~/.ssh/id_ed25519_personal.pub
   ```

4. Add the public key to GitHub:
   - Go to GitHub Settings
   - Navigate to SSH and GPG Keys
   - Click "New SSH Key"
   - Paste the public key

5. Create SSH config file at `~/.ssh/config` and add:

   ```
   Host github-personal
   Hostname github.com
   User git
   IdentityFile ~/.ssh/id_ed25519_personal
   ```

6. Clone the repository using:

   ```bash
   git clone git@github-personal:username/repo.git
   ```

7. Configure local git user (inside the repo):
   ```bash
   git config --local user.name "Username"
   git config --local user.email "emailId"
   ```

## Common Commands

| Command                         | Description                                 |
| ------------------------------- | ------------------------------------------- |
| `git clone <url>`               | Clone a repository to your machine          |
| `git branch`                    | View the list of branches                   |
| `git checkout -b <branch-name>` | Create a new branch and switch to it        |
| `git add .`                     | Stage all files (including untracked files) |
| `git commit -m "<message>"`     | Commit changes with a descriptive message   |
| `git push origin <branch-name>` | Push your changes to the remote repository  |
| `git log`                       | View commit history                         |

## Workflow Example

1. Create and switch to a new branch:

   ```bash
   git checkout -b feature-branch
   ```

2. Make changes to your files

3. Stage and commit your changes:

   ```bash
   git add .
   git commit -m "Add new feature"
   ```

4. Push to remote:
   ```bash
   git push origin feature-branch
   ```
