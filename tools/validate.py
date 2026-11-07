"""Check a rootjavs course JSON file.  Usage: python3 tools/validate.py content/courses/ai/prompt-engineering.json"""
import json, re, sys

CATS = {"Cyber Security", "AI", "Cloud", "Development", "Career", "Basics", "Emerging Tech"}
LEVELS = {"Beginner", "Intermediate", "Advanced"}
LABS = {"linux", "python", "web", "sql", "web3", "ai", "docker", "simulator"}
BLOCKS = {"h", "p", "ul", "ol", "tip", "warn", "code", "tbl", "diagram", "flip", "task"}


def words(blocks):
    n = 0
    for b in blocks:
        for v in b.values():
            if isinstance(v, str):
                n += len(v.split())
            elif isinstance(v, list):
                n += len(" ".join(json.dumps(x) for x in v).split())
            elif isinstance(v, dict):
                n += len(str(v.get("text", "")).split())
    return n


def check_q(q, where, errs):
    if not (isinstance(q, list) and len(q) == 4):
        errs.append(f"{where}: must be [question, [4 options], correctIndex, explanation]")
        return
    text, opts, ans, why = q
    if not isinstance(opts, list) or len(opts) != 4:
        errs.append(f"{where}: needs exactly 4 options")
    if not isinstance(ans, int) or not 0 <= ans <= 3:
        errs.append(f"{where}: correct index must be 0-3")
    if not str(why).strip():
        errs.append(f"{where}: explanation is empty")


def main(path):
    errs, warns = [], []
    try:
        c = json.load(open(path, encoding="utf-8"))
    except Exception as e:
        print(f"INVALID JSON: {e}")
        return 1
    for k in ["id", "title", "category", "level", "hours", "short", "prerequisites", "learn", "lessons", "lab",
              "finalExam", "practicalExam", "cheatsheet", "glossary", "interview", "xp"]:
        if k not in c:
            errs.append(f"missing key: {k}")
    if errs:
        print("\n".join(errs)); return 1
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", c["id"]):
        errs.append("id must be lowercase-with-hyphens")
    if c["category"] not in CATS:
        errs.append(f"category must be one of {sorted(CATS)}")
    if c["level"] not in LEVELS:
        errs.append("level must be Beginner, Intermediate or Advanced")
    if not 5 <= len(c["lessons"]) <= 8:
        errs.append(f"needs 5-8 lessons (has {len(c['lessons'])})")
    for i, L in enumerate(c["lessons"], 1):
        w = f"lesson {i} '{L.get('title', '?')}'"
        bad = [list(b)[0] for b in L.get("notes", []) if len(b) != 1 or list(b)[0] not in BLOCKS]
        if bad:
            errs.append(f"{w}: unknown note blocks {bad}")
        kinds = {list(b)[0] for b in L.get("notes", []) if len(b) == 1}
        for need in ("diagram", "flip", "task"):
            if need not in kinds:
                errs.append(f"{w}: needs at least one '{need}' block")
        n = words(L.get("notes", []))
        if n < 800:
            warns.append(f"{w}: notes are {n} words (target 800-1500)")
        if len(L.get("quiz", [])) != 5:
            errs.append(f"{w}: quiz needs exactly 5 questions")
        for j, q in enumerate(L.get("quiz", []), 1):
            check_q(q, f"{w} quiz {j}", errs)
        if not 2 <= len(L.get("practice", [])) <= 3:
            errs.append(f"{w}: practice needs 2-3 tasks")
    lab = c["lab"]
    if lab.get("type") not in LABS:
        errs.append(f"lab.type must be one of {sorted(LABS)}")
    if not 4 <= len(lab.get("steps", [])) <= 20:
        errs.append("lab needs 4-20 steps")
    for s in lab.get("steps", []):
        if not all(s.get(k) for k in ("goal", "hint", "check")):
            errs.append("every lab step needs goal, hint and check")
    if len(c["finalExam"]) != 25:
        errs.append(f"finalExam needs 25 questions (has {len(c['finalExam'])})")
    for j, q in enumerate(c["finalExam"], 1):
        check_q(q, f"finalExam {j}", errs)
    if not 3 <= len(c["practicalExam"].get("tasks", [])) <= 10:
        errs.append("practicalExam needs 3-10 tasks")
    if not 8 <= len(c["glossary"]) <= 15:
        errs.append("glossary needs 8-15 terms")
    if not 8 <= len(c["interview"]) <= 10:
        errs.append("interview needs 8-10 questions")
    for x in errs:
        print("ERROR:", x)
    for x in warns:
        print("WARNING:", x)
    print("PASS" if not errs else f"FAIL ({len(errs)} errors)")
    return 1 if errs else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1]) if len(sys.argv) > 1 else print(__doc__))
