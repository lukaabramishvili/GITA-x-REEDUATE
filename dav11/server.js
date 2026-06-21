const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const playersFile = path.join(__dirname, "players.json");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // GET /about
  if (req.method === "GET" && parsedUrl.pathname === "/about") {
    const about = {
      firstName: "Luka",
      lastName: "Abramishvili",
      hobby: "Programming"
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    return res.end(JSON.stringify(about));
  }

  // GET /players
  if (req.method === "GET" && parsedUrl.pathname === "/players") {
    const players = JSON.parse(
      fs.readFileSync(playersFile, "utf8")
    );

    if (parsedUrl.query.nation) {
      const filteredPlayers = players.filter(
        (player) =>
          player.nation.toLowerCase() ===
          parsedUrl.query.nation.toLowerCase()
      );

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      return res.end(JSON.stringify(filteredPlayers));
    }

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    return res.end(JSON.stringify(players));
  }

  // POST /players
  if (req.method === "POST" && parsedUrl.pathname === "/players") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const newPlayer = JSON.parse(body);

        if (
          !newPlayer.name ||
          !newPlayer.nation ||
          !newPlayer.position ||
          !newPlayer.age
        ) {
          res.writeHead(400, {
            "Content-Type": "application/json"
          });

          return res.end(
            JSON.stringify({
              message: "ყველა ველი სავალდებულოა"
            })
          );
        }

        const players = JSON.parse(
          fs.readFileSync(playersFile, "utf8")
        );

        newPlayer.id =
          players.length > 0
            ? players[players.length - 1].id + 1
            : 1;

        players.push(newPlayer);

        fs.writeFileSync(
          playersFile,
          JSON.stringify(players, null, 2)
        );

        res.writeHead(201, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify(newPlayer));
      } catch (error) {
        res.writeHead(500);
        res.end("Server Error");
      }
    });

    return;
  }

  // DELETE /players/:id
  if (
    req.method === "DELETE" &&
    parsedUrl.pathname.startsWith("/players/")
  ) {
    const id = Number(
      parsedUrl.pathname.split("/")[2]
    );

    let players = JSON.parse(
      fs.readFileSync(playersFile, "utf8")
    );

    const playerExists = players.find(
      (player) => player.id === id
    );

    if (!playerExists) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });

      return res.end(
        JSON.stringify({
          message: "Player not found"
        })
      );
    }

    players = players.filter(
      (player) => player.id !== id
    );

    fs.writeFileSync(
      playersFile,
      JSON.stringify(players, null, 2)
    );

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    return res.end(
      JSON.stringify({
        message: "Player deleted"
      })
    );
  }

  res.writeHead(404);
  res.end("Route not found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});