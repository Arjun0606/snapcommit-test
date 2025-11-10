# GitHub Operations Screenshots

You're on branch `feature/api-database-utils` which is perfect for testing!

---

## 📸 Screenshot 1: "Check What Branch You're On"

**Open Terminal → Run:**
```bash
cd ~/snapcommit-test
snap
```

**Then type:**
```
what branch am i on
```

**You'll see:**
```
Branch: feature/api-database-utils
```

**Then type:**
```
show last 3 commits
```

**📸 TAKE SCREENSHOT**
- Shows branch awareness
- Shows commit history

---

## 📸 Screenshot 2: "Create a PR"

**Still in snap terminal. Type:**
```
create a PR to main with title "Add API and database utilities"
```

**You'll see:**
```
🔄 Creating PR...
✓ PR #X created
  https://github.com/Arjun0606/snapcommit-test/pull/X
```

**📸 TAKE SCREENSHOT**
- Shows PR creation
- Shows the URL

---

## 📸 Screenshot 3: "Check CI Status"

**Still in snap terminal. Type:**
```
check if my build passed
```

**You'll see either:**
```
🔍 Checking CI status...
✅ All checks passed (X checks)
```

**OR:**
```
🔍 Checking CI status...
✓ No CI checks configured

This is fine! Not all repos need CI.
```

**📸 TAKE SCREENSHOT**
- Shows CI integration

---

## 📸 Screenshot 4: "List All PRs"

**Still in snap terminal. Type:**
```
show all PRs
```

**You'll see:**
```
📋 Open PRs (X):
  #X Add API and database utilities
  #X Test Feature (if exists)
```

**📸 TAKE SCREENSHOT**
- Shows PR listing

---

## 📸 Screenshot 5: "Show PR Details"

**Still in snap terminal. Type:**
```
show my PR
```

**OR if that doesn't work:**
```
show PR #3
```
*(use the PR number from Screenshot 2)*

**You'll see:**
```
📋 PR #X:

   Add API and database utilities
   Arjun0606 wants to merge feature/api-database-utils → main

   ✓ Open
   X comments • X commits • X files
```

**📸 TAKE SCREENSHOT**
- Shows PR details

---

## 📸 Screenshot 6: "Try to Create PR from Main (Error Demo)"

**Exit snap (Ctrl+C), then run:**
```bash
git checkout main
snap
```

**Then type:**
```
create a PR to main with title "Test Error Handling"
```

**You'll see INTELLIGENT ERROR:**
```
🔄 Creating PR...

❌ Cannot create PR

⚠️  You're on the main branch!

Why this fails:
  • PRs merge FROM a feature branch TO main
  • You can't create a PR from main to main

💡 Here's what to do:

1. Create a new branch:
   create a new branch called feature/your-feature

2. Make your changes
3. Commit and push:
   commit and push changes

4. Then create PR:
   create a PR to main
```

**📸 TAKE SCREENSHOT - THIS IS GOLD!**
- Shows intelligent error handling
- Shows guidance
- Shows SnapCommit is different from other tools

---

## 🎯 **Perfect Screenshots to Show:**

1. ✅ Basic Git commands (branch, commits)
2. ✅ PR creation (success)
3. ✅ CI status check
4. ✅ PR listing
5. ✅ PR details
6. ✅ **Intelligent error with guidance** ← This is your differentiator!

---

## 💡 **For Product Hunt:**

Screenshot #6 is the MOST IMPORTANT because it shows:
- SnapCommit UNDERSTANDS the error
- SnapCommit EXPLAINS why it failed
- SnapCommit GUIDES you to fix it

This is what separates SnapCommit from ChatGPT and other tools!

---

**Start now with: `cd ~/snapcommit-test` then `snap`** 🚀

