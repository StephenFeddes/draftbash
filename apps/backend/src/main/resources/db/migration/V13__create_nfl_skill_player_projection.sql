CREATE TABLE nfl_skill_player_projection (
    id SERIAL PRIMARY KEY,
    player_id INT NOT NULL,
    season SMALLINT NOT NULL,
    fumbles_lost SMALLINT DEFAULT 0,
    two_point_conversions SMALLINT DEFAULT 0,
    rush_attempts SMALLINT DEFAULT 0,
    rush_yards SMALLINT DEFAULT 0,
    rush_touchdowns SMALLINT DEFAULT 0,
    targets SMALLINT DEFAULT 0,
    receptions SMALLINT DEFAULT 0,
    receiving_yards SMALLINT DEFAULT 0,
    receiving_touchdowns SMALLINT DEFAULT 0,
    pass_attempts SMALLINT DEFAULT 0,
    pass_completions SMALLINT DEFAULT 0,
    pass_yards SMALLINT DEFAULT 0,
    pass_touchdowns SMALLINT DEFAULT 0,
    interceptions SMALLINT DEFAULT 0,
    standard_fantasy_points SMALLINT DEFAULT 0,
    ppr_fantasy_points SMALLINT DEFAULT 0,
    half_ppr_fantasy_points SMALLINT DEFAULT 0,
    FOREIGN KEY (player_id) REFERENCES player(id) ON DELETE SET NULL
);