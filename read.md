1. Turn Off Auto Suggestions

   Open Settings (Ctrl+, / Cmd+,).

   Search for “Copilot Inline Suggest: Enable”.

   Uncheck it → this stops auto-popup ghost text

2. Format on Save (recommended)

   This way, Prettier runs automatically whenever you save a file:

Go to File → Preferences → Settings (Ctrl + ,).

Search: format on save.

Check ✅ Editor: Format On Save.

3. Make sure Prettier is the default formatter

   Open Command Palette → Ctrl+Shift+P

   Search → “Format Document With…”

   Click → “Configure Default Formatter”

   Choose → Prettier - Code formatter

---

4. PS C:\Users\HP\Desktop\Products\dsa> git init
   Initialized empty Git repository in C:/Users/HP/Desktop/Products/DSA/.git/
   PS C:\Users\HP\Desktop\Products\dsa> git commit -m "first commit"
   On branch master

Initial commit

Untracked files:
(use "git add <file>..." to include in what will be committed)
array/
read.md

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP\Desktop\Products\dsa> git commit -m "first commit"
[master (root-commit) 4f1475f] first commit
3 files changed, 126 insertions(+)
create mode 100644 array/mergeArr.js
create mode 100644 array/twoSum.js
create mode 100644 read.md
PS C:\Users\HP\Desktop\Products\dsa> git branch -M main
PS C:\Users\HP\Desktop\Products\dsa> git remote add origin https://github.com/SAGAR1010001/dsa.git
PS C:\Users\HP\Desktop\Products\dsa> git push -u origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 1.68 KiB | 572.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/SAGAR1010001/dsa.git

- [new branch] main -> main
  branch 'main' set up to track 'origin/main'.
  PS C:\Users\HP\Desktop\Products\dsa>
