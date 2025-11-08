# 🚀 Quick Testing Guide for SnapCommit

## Current Test Repo Status
📍 Location: `/Users/arjun/snapcommit-test`
✅ Has uncommitted changes ready to test with:
- Modified: `README.md`
- Modified: `app.js`
- New file: `TESTING_PLAN.md`

---

## 🎯 START TESTING NOW

### Step 1: Navigate to Test Repo
```bash
cd /Users/arjun/snapcommit-test
```

### Step 2: Run SnapCommit
```bash
snap
```

### Step 3: Authenticate (first time only)
- Paste your token from `https://snapcommit.dev/dashboard`

---

## 🧪 Quick Test Commands (Try These First)

### Test 1: Check Status
```
> what changed?
```
**Expected:** Should show README.md, app.js, TESTING_PLAN.md

---

### Test 2: Commit with AI Message
```
> commit and push my changes
```
**Expected:** 
1. AI generates commit message
2. Shows commit message and asks if you want to edit
3. Shows list of files (README.md, app.js, TESTING_PLAN.md)
4. Asks if you want to commit all or select
5. Commits and pushes

---

### Test 3: Stay in REPL
**Expected:** After the commit, should stay in `snap>` prompt (not exit)

---

### Test 4: Check Status Again
```
> any changes?
```
**Expected:** Should say "No changes" (everything committed)

---

### Test 5: Create More Changes
Exit snap and run:
```bash
echo "console.log('another test');" > newfile.js
```

Then in snap:
```
> commit this new file
```

---

### Test 6: Branch Operations
```
> create a branch called test-feature
```

```
> switch back to main
```

---

### Test 7: Exit SnapCommit
```
> exit
```
**Expected:** Should exit the REPL and return to normal terminal

---

## 🐛 What to Watch For

### ✅ Good Signs:
- AI understands natural language
- Commit messages are accurate and descriptive
- REPL stays open after each command
- No crashes or errors
- Fast response time (<3 seconds)

### ❌ Problems to Report:
- Input doubling (typing "Y" shows "YY")
- REPL exits after commands
- AI doesn't understand commands
- Errors or crashes
- Slow response (>5 seconds)
- Commit messages are generic ("Update")

---

## 📝 Testing Checklist

- [ ] Can authenticate with token
- [ ] `status` command works
- [ ] AI generates good commit messages
- [ ] Can edit commit messages
- [ ] Can select which files to commit
- [ ] Commit works
- [ ] Push works
- [ ] REPL stays persistent
- [ ] Branch creation works
- [ ] Branch switching works
- [ ] Error handling is graceful
- [ ] Can exit cleanly

---

## 🎯 Priority Tests

**MUST WORK:**
1. ✅ Commit and push (the core feature)
2. ✅ AI commit messages (not generic)
3. ✅ REPL persistence (doesn't exit)
4. ✅ Token validation
5. ✅ Natural language understanding

**NICE TO HAVE:**
6. ✅ Branch operations
7. ✅ GitHub features
8. ✅ Conflict resolution
9. ✅ Multi-repo support

---

## 🚀 START HERE

```bash
cd /Users/arjun/snapcommit-test
snap
# Paste token
> commit and push all my changes
```

Let's see if it works! 🎉

