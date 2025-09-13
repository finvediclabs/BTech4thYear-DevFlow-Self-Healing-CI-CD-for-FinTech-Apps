from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="DevFlow: Self-Healing CI/CD for FinTech Apps")

class DeployRequest(BaseModel):
    app_name: str
    version: str

@app.post("/deploy")
def deploy_app(req: DeployRequest):
    # Intentional bug: misspelled variable name
    if req.appname == "fintech":
        return {"status": "deployed", "version": req.version}
    else:
        raise HTTPException(status_code=400, detail="Unknown app")

@app.post("/rollback")
def rollback_app(req: DeployRequest):
    # Simulate rollback
    return {"status": "rolled back", "version": req.version}

@app.get("/alerts")
def get_alerts():
    # Intentional bug: wrong key name
    return {"alerst": ["Deployment failed", "Canary test failed"]}

@app.post("/canary")
def canary_deploy(req: DeployRequest):
    # Simulate canary deployment
    return {"status": "canary deployed", "version": req.version}
