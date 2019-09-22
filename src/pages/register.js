import React from "react";

const Registration = () => {
  return (
    <div
      class="row flex-row justify-content-center align-items-center"
      style={{ marginTop: "80px", marginBottom: "30px" }}
    >
      <div class="col-lg-4 ">
        <div class="bs-component">
          <form>
            <fieldset>
              <legend>Tournament Registration</legend>
              <div class="form-group">
                <label for="player_1">Player 1 - Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="player_1"
                  aria-describedby="player1Help"
                  placeholder="Player name "
                />
                <small id="player1Help" class="form-text text-muted">
                  Player 1 full name
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Player 1 - Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="player_2">Player 2 - Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="player_2"
                  aria-describedby="partnerName"
                  placeholder="Partner player name"
                />
                <small id="partnerName" class="form-text text-muted">
                  Full name of partner
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail2">Player 2 - Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleSelect1">Player group</label>
                <select class="form-control" id="exampleSelect1">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;