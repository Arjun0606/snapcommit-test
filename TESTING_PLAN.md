# 🧪 SnapCommit Comprehensive Testing Plan

## Test Repository: `/Users/arjun/snapcommit-test`

---

## ✅ PHASE 1: BASIC FUNCTIONALITY

### Test 1.1: Single File Addition
**Action:** Create a new file and commit
```bash
# Create file
echo "console.log('test');" > test.js

# Test with SnapCommit
snap
> "commit and push the new test file"
```
**Expected:** AI generates commit message, commits, pushes

---

### Test 1.2: Single File Modification
**Action:** Modify existing file
```bash
# Modify app.js - add a new route
# Then in snap:
> "commit the new route I added"
```
**Expected:** AI detects changes, generates descriptive commit

---

### Test 1.3: Multiple File Changes
**Action:** Modify multiple files at once
```bash
# Modify README.md, app.js, styles.css
# Then:
> "commit all my changes"
```
**Expected:** AI shows all changed files, allows selection

---

### Test 1.4: File Deletion
**Action:** Delete a file
```bash
rm test.js
# Then:
> "commit the deletion"
```
**Expected:** Handles deletions properly

---

## ✅ PHASE 2: NATURAL LANGUAGE COMMANDS

### Test 2.1: Descriptive Commit Request
```
> "commit these changes with a message about fixing the bug"
```

### Test 2.2: Quick Commit Request
```
> "just commit everything quickly"
```

### Test 2.3: Commit Without Push
```
> "commit but don't push yet"
```

### Test 2.4: Commit and Push
```
> "commit and push everything"
```

### Test 2.5: Status Check
```
> "what changed?"
> "show me the status"
> "any uncommitted changes?"
```

---

## ✅ PHASE 3: BRANCH OPERATIONS

### Test 3.1: Create New Branch
```
> "create a new branch called feature/test"
```

### Test 3.2: Switch Branches
```
> "switch to main branch"
> "go back to the previous branch"
```

### Test 3.3: Commit on Different Branch
```
# Switch to feature branch
> "commit these changes on this branch"
```

### Test 3.4: Merge Branches (if implemented)
```
> "merge feature/test into main"
```

---

## ✅ PHASE 4: ERROR HANDLING

### Test 4.1: No Changes
```
# Make no changes
> "commit my changes"
```
**Expected:** Should say "No changes to commit"

### Test 4.2: Nothing to Push
```
# Everything already pushed
> "push my changes"
```
**Expected:** Should say "Nothing to push"

### Test 4.3: Invalid Command
```
> "delete the entire repository"
```
**Expected:** Should refuse or ask for confirmation

### Test 4.4: Uncommitted Changes Before Switch
```
# Make changes
> "switch to a different branch"
```
**Expected:** Should warn about uncommitted changes

---

## ✅ PHASE 5: MULTI-REPO SUPPORT

### Test 5.1: Switch Between Repos
```
# In snapcommit-test repo
> "show status"

# Then manually cd to BuilderOS
cd /Users/arjun/BuilderOS
snap
> "show status"
```
**Expected:** SnapCommit should track context for each repo

---

## ✅ PHASE 6: GITHUB INTEGRATION (if token added)

### Test 6.1: Check Issues
```
> "show me open issues"
```

### Test 6.2: Create Issue
```
> "create an issue about the button bug"
```

### Test 6.3: Pull Request Info
```
> "show open pull requests"
```

---

## ✅ PHASE 7: ADVANCED FEATURES

### Test 7.1: Auto Pull Before Push
```
# Simulate remote changes
> "commit and push"
```
**Expected:** Should auto-pull if needed

### Test 7.2: Conflict Detection
```
# Create a conflict scenario
> "push my changes"
```
**Expected:** Should detect and help resolve

### Test 7.3: Commit Message Editing
```
> "commit my changes"
# Should allow editing the AI-generated message
```

### Test 7.4: File Selection for Commit
```
# Change 3 files, only want to commit 2
> "commit my changes"
# Should show list and allow deselection
```

---

## ✅ PHASE 8: REPL PERSISTENCE

### Test 8.1: REPL Stays Open
```
# Run multiple commands
> "status"
> "commit changes"
> "create a branch"
> "exit"
```
**Expected:** REPL should stay open until "exit" command

### Test 8.2: Update Notification
```
# If there's a new version
> [any command]
```
**Expected:** Should show update notification once

---

## ✅ PHASE 9: TOKEN VALIDATION

### Test 9.1: Valid Token
```
# Use valid token
snap
```
**Expected:** Should work normally

### Test 9.2: Expired Token
```
# Use expired token (test after 1 hour if possible)
snap
```
**Expected:** Should detect and ask to renew

### Test 9.3: Invalid Token
```
# Use random string as token
snap
```
**Expected:** Should reject immediately

---

## ✅ PHASE 10: EDGE CASES

### Test 10.1: Very Large Commit
```
# Create 20+ files
> "commit everything"
```

### Test 10.2: Special Characters in Filenames
```
# Create file with spaces/special chars
touch "my file (v2).js"
> "commit this"
```

### Test 10.3: Empty Commit Message
```
> "commit with no message"
```

### Test 10.4: Long Natural Language Input
```
> "I want to commit all the changes I made to the app.js file where I added a new route for handling user authentication and also updated the styles.css to make the button prettier and also fixed a typo in the README"
```

---

## 🎯 SUCCESS CRITERIA

✅ All basic Git operations work via natural language
✅ AI generates accurate commit messages
✅ Error handling is graceful (no crashes)
✅ REPL stays persistent
✅ Multi-repo context works
✅ File selection works
✅ Token validation works
✅ GitHub features work (if token provided)
✅ No data corruption in test repo
✅ Performance is acceptable (<3 seconds per command)

---

## 📊 TESTING STATUS

- [ ] Phase 1: Basic Functionality
- [ ] Phase 2: Natural Language Commands
- [ ] Phase 3: Branch Operations
- [ ] Phase 4: Error Handling
- [ ] Phase 5: Multi-Repo Support
- [ ] Phase 6: GitHub Integration
- [ ] Phase 7: Advanced Features
- [ ] Phase 8: REPL Persistence
- [ ] Phase 9: Token Validation
- [ ] Phase 10: Edge Cases

---

## 🐛 BUGS FOUND

(Will document any issues discovered during testing)

---

## 🚀 READY TO TEST!

Repository is set up at: `/Users/arjun/snapcommit-test`

Next steps:
1. Get your CLI token from dashboard
2. Run `snap` in this test repo
3. Follow the test plan above
4. Document any issues

