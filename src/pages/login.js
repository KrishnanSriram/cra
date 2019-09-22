import React from 'react'

const Login = () => {
    return (
        <div
      class="row flex-row justify-content-center align-items-center"
      style={{ marginTop: "80px", marginBottom: "30px" }}
    >
      <div class="col-lg-4 ">
        <div class="bs-component">
          <form>
            <fieldset>
              <legend>Player Login</legend>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  EMail ID you registerd with
                </small>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Login
