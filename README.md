# DevFlow: Self-Healing CI/CD for FinTech Apps

Automate CI/CD with rollback, alerts, canary deploy
Theme: CI/CD + Jenkins + GitHub Actions

## Project Structure
- `backend/`: FastAPI Python backend
- `frontend/`: React frontend

## Installation

### Backend (Python FastAPI)
1. Install Python 3.8+
2. Navigate to `backend` folder:
	```powershell
	cd backend
	```
3. Install requirements:
	```powershell
	pip install fastapi uvicorn
	```
4. Run backend:
	```powershell
	uvicorn main:app --reload
	```

### Frontend (React)
1. Install Node.js (v16+ recommended)
2. Navigate to `frontend` folder:
	```powershell
	cd frontend
	```
3. Create React app (if not already):
	```powershell
	npx create-react-app .
	```
4. Replace `src/App.js` with provided `App.js`.
5. Start frontend:
	```powershell
	npm start
	```

## Sample Bugs & How to Fix

### Backend Bugs
- In `main.py`, `req.appname` should be `req.app_name`.
- In `/alerts` endpoint, return key is `alerst` (should be `alerts`).

#### Fix:
- Change `req.appname` to `req.app_name` in `/deploy`.
- Change `"alerst"` to `"alerts"` in `/alerts`.

### Frontend Bugs
- Deploy endpoint is `/deply` (should be `/deploy`).
- Alerts key is `alerts` (backend returns `alerst`).

#### Fix:
- Change fetch URL `/deply` to `/deploy` in `App.js`.
- Change `data.alerts` to `data.alerst` in `App.js` (or fix backend).

## Requirements
- Python 3.8+
- Node.js 16+
- FastAPI
- Uvicorn
- React

## Theme
CI/CD + Jenkins + GitHub Actions

---
For more details, see code comments in backend and frontend files.
# BTech4thYear-DevFlow-Self-Healing-CI-CD-for-FinTech-Apps