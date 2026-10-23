(function(Scratch) { 'use strict';

class Extension {
    getInfo() {
        return {
            id: "byteDimodFetch",
            name: "Dimod Fetch",
            "color1": "#6c5ce7",
            "color2": "#4530bf",
            "color3": "#10008d",
            "menuIconURI": menu_icon,
            "blockIconURI": block_icon,

            "blocks": [
                // user stuff LOL
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: "User API"
                },
                {   opcode: "dmf_fetch_user_full",
                    text: "get user info of [USER]",
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    allowDropAnywhere: true,
                    arguments: { USER: {type: Scratch.ArgumentType.STRING, defaultValue: "byte"} }
                },
                {   opcode: "dmf_fetch_user_data",
                    text: "get [QUERY] of user [USER]",
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    allowDropAnywhere: true,
                    arguments: {
                        USER: {type: Scratch.ArgumentType.STRING, defaultValue: "byte"}, 
                        QUERY: {type: Scratch.ArgumentType.STRING, menu: "user_data", defaultValue: "dit_balance"}
                    }
                },
                {
                    opcode: "dmf_fetch_user_booleans",
                    text: "is user [USER] [QUERY]?",
                    blockType: Scratch.BlockType.BOOLEAN,
                    disableMonitor: true,
                    allowDropAnywhere: true,
                    arguments: {
                        USER: {type: Scratch.ArgumentType.STRING, defaultValue: "byte"},
                        QUERY: {type: Scratch.ArgumentType.STRING, menu: "user_booleans", defaultValue: "is_trusted"}
                    }
                },

                // game stuff yaya
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: "Game API"
                },
                {   opcode: "dmf_fetch_game_full",
                    text: "get project info of [GAME] by user [USER]",
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    allowDropAnywhere: true,
                    arguments: {
                        GAME: {type: Scratch.ArgumentType.STRING, defaultValue: "dizzysweeper"},
                        USER: {type: Scratch.ArgumentType.STRING, defaultValue: "byte"}
                    }
                },
                {   opcode: "dmf_fetch_game_data",
                    text: "get [QUERY] of [GAME] by [USER]",
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    allowDropAnywhere: true,
                    arguments: {
                        GAME: {type: Scratch.ArgumentType.STRING, defaultValue: "dizzysweeper"},
                        USER: {type: Scratch.ArgumentType.STRING, defaultValue: "byte"}, 
                        QUERY: {type: Scratch.ArgumentType.STRING, menu: "game_data", defaultValue: "play_count"}
                    }
                },
                {
                    opcode: "dmf_fetch_game_booleans",
                    text: "is [GAME] by [USER] [QUERY]?",
                    blockType: Scratch.BlockType.BOOLEAN,
                    disableMonitor: true,
                    allowDropAnywhere: true,
                    arguments: {
                        GAME: {type: Scratch.ArgumentType.STRING, defaultValue: "dizzysweeper"},
                        USER: {type: Scratch.ArgumentType.STRING, defaultValue: "byte"}, 
                        QUERY: {type: Scratch.ArgumentType.STRING, menu: "game_booleans", defaultValue: "featured"}
                    }
                },
            ],

            "menus": {
                user_data: {
                    acceptReporters: true,
                    items: [
                        {text: 'ID', value: 'id'},
                        {text: 'username', value: 'username'},
                        {text: 'bio', value: 'bio'},
                        {text: 'custom CSS', value: 'custom_css'},
                        {text: 'role', value: 'role'},
                        {text: 'join date', value: 'created_at'},
                        {text: 'profile picture URL', value: 'avatar_url'},
                        {text: 'profile banner URL', value: 'banner_url'},
                        {text: 'custom name color', value: 'name_color'},
                        {text: 'custom name HTML', value: 'name_html'},
                        {text: 'custom title', value: 'custom_title'},
                        {text: 'dits', value: 'dit_balance'},
                        {text: 'followers', value: 'follower_count'},
                        {text: 'following', value: 'following_count'},
                        {text: 'badge list', value: 'badges'},
                        {text: 'credibility', value: 'credibility_score'}
                    ]
                },
                user_booleans: {
                    acceptReporters: true,
                    items: [
                        {text: 'trusted', value: 'is_trusted'},
                        {text: 'banned', value: 'is_banned'}
                        
                    ]
                },
                game_data: {
                    acceptReporters: true,
                    items: [
                        {text: 'ID', value: 'id'},
                        {text: 'owner ID', value: 'owner_id'},
                        {text: 'owner name', value: 'owner_username'},
                        {text: 'title', value: 'name'},
                        {text: 'tags', value: 'tags'},
                        {text: 'play count', value: 'play_count'},
                        {text: 'remix_count', value: 'remix_count'},
                        {text: 'description', value: 'description'},
                        {text: 'custom CSS', value: 'custom_CSS'},
                        {text: 'thumbnail URL', value: 'thumbnail_URL'},
                        {text: 'thumbnail key', value: 'thumbnail_key'},
                        {text: 'project screenshots', value: 'screenshots'},
                        {text: 'visibility', value: 'visibility'},
                        {text: 'creation date', value: 'created_at'},
                        {text: 'last updated', value: 'updated_at'},
                        {text: 'search vector', value: 'search_vector'},
                        {text: 'slug', value: 'slug'},
                        {text: 'content warnings', value: 'content_flags'},
                        {text: 'kind', value: 'kind'},
                        {text: 'comment count', value: 'comment_count'},
                        {text: 'current version', value: 'current_version'},
                        {text: 'version history', value: 'version_history'},

                    ]
                },
                game_booleans: {
                    acceptReporters: true,
                    items: [
                        {text: 'featured', value: 'featured'},
                        {text: 'allow remixes', value: 'allow_remix'},
                        {text: 'cloud project', value: 'is_cloud'},
                        {text: 'auto-thumbnail', value: 'thumbnail_is_auto'},
                        {text: 'comments open', value: 'comments_open'},
                        {text: 'owner unrestricted', value: 'owner_unrestricted'},
                        
                    ]
                },
        }
        };

    } // end of getInfo; put your functions here

   async dmf_fetch_user_full(args) {
        if (args.USER != null && args.USER !== "") {
            try {
                const response = await fetch(
                    ["https://api.dimod.org/api/users/", args.USER, "/"].join("")
                );

                if (!response.ok) {
                    throw new Error("HTTP error:" + response.status);
                }
                const data = await response.json();
                return JSON.stringify(data);

            }   
            catch (error) {
                console.error("aw man! fetching didnt work", error);
                return "";
            }
        } else {
            console.error("ERROR!!! you need to input a user buddy");
            return "";
        }
        
    }

    async dmf_fetch_user_data(args) {
        if (args.USER != null && args.USER !== "") {
            try {
                    const response = await fetch(
                        ["https://api.dimod.org/api/users/", args.USER, "/"].join("")
                    );

                    if (!response.ok) {
                        throw new Error("HTTP error:" + response.status);
                    }
                    const data = await response.json();
                    if (args.QUERY !== "badges") {
                        return data[args.QUERY];
                    } else {
                        const data2 = data[args.QUERY];
                        return JSON.stringify(data2);
                    }

            }   
            catch (error) {
                console.error("aw man! fetching didnt work", error);
                return "";
            }
        } else {
            console.error("ERROR!!! you need to input a user buddy");
            return "";
        }
    }

    async dmf_fetch_user_booleans(args) {
        const result = await this.dmf_fetch_user_data(args);
        if (result != null && result !== "") {
            return result
        } else {
            return false
        }
    }

    async dmf_fetch_game_full(args) {
        if (args.USER != null && args.USER !== "" && args.GAME != null && args.GAME !== "") {
            try {
                const response = await fetch(
                    ["https://api.dimod.org/api/users/", args.USER, "/", args.GAME, "/"].join("")
                );

                if (!response.ok) {
                    throw new Error("HTTP error:" + response.status);
                }
                const data = await response.json();
                return JSON.stringify(data);

            }   
            catch (error) {
                console.error("aw man! fetching didnt work", error);
                return "";
            }
        } else {
            console.error("ERROR!!! you need to input both a game AND a user buddy");
            return "";
        }
    }

    async dmf_fetch_game_data(args) {
        if (args.USER != null && args.USER !== "" && args.GAME != null && args.GAME !== "") {
            try {
                    const response = await fetch(
                        ["https://api.dimod.org/api/users/", args.USER, "/", args.GAME, "/"].join("")
                    );

                    if (!response.ok) {
                        throw new Error("HTTP error:" + response.status);
                    }
                    const data = await response.json();
                    if (args.QUERY !== "tags" && args.QUERY !== "content_flags" && args.QUERY !== "current_version" && args.QUERY !== "version_history" && args.QUERY !== "screenshots") {
                        return data[args.QUERY];
                    } else {
                        const data2 = data[args.QUERY];
                        return JSON.stringify(data2);
                    }

            }   
            catch (error) {
                console.error("aw man! fetching didnt work", error);
                return "";
            }
        } else {
            console.error("ERROR!!! you need to input both a game AND a user buddy");
            return "";
        }
    }

    async dmf_fetch_game_booleans(args) {
        const result = await this.dmf_fetch_game_data(args);
        if (result != null && result !== "") {
            return result
        } else {
            return false
        }
    }


};

const menu_icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCwwLDIwLDIwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLC0xNzApIj48ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiPjxwYXRoIGQ9Ik0yMzEsMTgwYzAsLTQuOTcwNTYgNC4wMjk0NCwtOSA5LC05YzQuOTcwNTYsMCA5LDQuMDI5NDQgOSw5YzAsNC45NzA1NiAtNC4wMjk0NCw5IC05LDljLTQuOTcwNTYsMCAtOSwtNC4wMjk0NCAtOSwtOXoiIGlkPSJkLXJiM3E0bWt5IiBmaWxsPSIjNmI1ZWM3IiBzdHJva2U9IiM0NDJmYjgiIHN0cm9rZS13aWR0aD0iMiIvPjxnIGlkPSJkLXBlbzUzMGRtIiBmb250LXdlaWdodD0iNDAwIj48cGF0aCBkPSJNMjM1LjM1NTA2LDE4MC42MTI0NGMtMS40NTE3OCwtMS40NTE3OCAtMS40NTE3OCwtMy44MDU1OSAwLC01LjI1NzM3YzEuNDUxNzgsLTEuNDUxNzggMy44MDU1OSwtMS40NTE3OCA1LjI1NzM3LDBjMS4yOTA5OCwxLjI5MDk4IDEuNDMzOTcsMy4yOTUyMyAwLjQyODk4LDQuNzQ0MjFjMC4zMzEyLC0wLjE1OTEzIDAuNjQ1MDYsLTAuMTcwNTcgMC44MTcyNCwwLjAwMTZjMC4xNDY3NywwLjE0Njc3IDAuMTYwMTEsMC4zOTY1IDAuMDYyMjgsMC42NzIxNmwzLjAxOTE4LDMuMDY0OWMwLjQ4OTU0LC0wLjA3NjUgMC43ODI1OCwwLjIwNDYxIDAuNzgyNTgsMC4yMDQ2MWMwLDAgMC4xMjE3OCwwLjY3MzQ2IC0wLjQ0MjQ1LDEuMjM3NjljLTAuNTY0MjMsMC41NjQyMyAtMS4yMzc2OSwwLjQ0MjQ1IC0xLjIzNzY5LDAuNDQyNDVjMCwwIC0wLjI4MTExLC0wLjI5MzA0IC0wLjIwNDYxLC0wLjc4MjU4bC0zLjA2NDksLTMuMDE5MThjLTAuMjc1NjYsMC4wOTc4MyAtMC41MjUzOSwwLjA4NDQ5IC0wLjY3MjE2LC0wLjA2MjI4Yy0wLjE3MjE3LC0wLjE3MjE3IC0wLjE2MDczLC0wLjQ4NjA0IC0wLjAwMTYsLTAuODE3MjRjLTEuNDQ4OTksMS4wMDQ5OSAtMy40NTMyMywwLjg2MiAtNC43NDQyMiwtMC40Mjg5N3pNMjM5Ljk0NjY1LDE3OS45NDY2NmMxLjA4NDA4LC0xLjA4NDA4IDEuMDg0MDgsLTIuODQxNzMgMCwtMy45MjU4MWMtMS4wODQwOCwtMS4wODQwOCAtMi44NDE3MywtMS4wODQwOCAtMy45MjU4MSwwYy0xLjA4NDA4LDEuMDg0MDggLTEuMDg0MDgsMi44NDE3MyAwLDMuOTI1ODFjMS4wODQwOCwxLjA4NDA4IDIuODQxNzMsMS4wODQwOCAzLjkyNTgxLDB6IiBpZD0iZC1iaTRtdGRlbSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDQyZmI4IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMzcuMTEwOTcsMTc1LjY1NTI2bDAuMDE5OCwxLjM4NjZjLTAuNTU3ODksMC4zMDUxNSAtMC45MzYyNiwwLjg5NzUxIC0wLjkzNjI2LDEuNTc4MjNjMCwwLjA2ODc0IDAuMDAzODYsMC4xMzY1NyAwLjAxMTM3LDAuMjAzM2MtMC4yNTMzNiwtMC4wNzMyNCAtMC4zNzEzNywtMC4yMjk5IC0wLjM3MTM3LC0wLjIyOTljMCwwIC0wLjY4MjM0LC0wLjQ3ODE4IC0wLjA3MDM4LC0xLjczMDA3YzAuMzczNTYsLTAuNzY0MTkgMS4zNDY4NCwtMS4yMDgxNyAxLjM0Njg0LC0xLjIwODE2eiIgaWQ9ImQtejFobnNtZGkiIGRhdGEtZGltb2QtYW5nbGU9IjAuMTMiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDAuMjE5MTIsMTc2Ljg2MzQzYzAuNjExOTYsMS4yNTE4OSAtMC4wNzAzOCwxLjczMDA3IC0wLjA3MDM4LDEuNzMwMDdjMCwwIC0wLjExODAxLDAuMTU2NjUgLTAuMzcxMzcsMC4yMjk5YzAuMDA3NTEsLTAuMDY2NzMgMC4wMTEzNywtMC4xMzQ1NiAwLjAxMTM3LC0wLjIwMzNjMCwtMC42ODA3MyAtMC4zNzgzNiwtMS4yNzMwOCAtMC45MzYyNiwtMS41NzgyM2wwLjAxOTgsLTEuMzg2NmMwLDAgMC45NzMyOCwwLjQ0Mzk4IDEuMzQ2ODQsMS4yMDgxNnoiIGlkPSJkLWs5NjZ2ZXlsIiBkYXRhLWRpbW9kLWFuZ2xlPSIwLjEzIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM3Ljk5MjIsMTgwLjIxNTI0Yy0wLjg4MDk3LDAgLTEuNTk1MTQsLTAuNzE0MTcgLTEuNTk1MTQsLTEuNTk1MTRjMCwtMC44ODA5NyAwLjcxNDE3LC0xLjU5NTE0IDEuNTk1MTQsLTEuNTk1MTRjMC44ODA5NywwIDEuNTk1MTQsMC43MTQxNyAxLjU5NTE0LDEuNTk1MTRjMCwwLjg4MDk3IC0wLjcxNDE3LDEuNTk1MTQgLTEuNTk1MTQsMS41OTUxNHpNMjM3LjgzNTM3LDE3OC43MzI1Yy0wLjQ0OTQ3LC0wLjAxODQyIC0xLjA4MDk3LC0wLjE3MTcyIC0xLjI3MDk4LC0wLjM0NDI5Yy0wLjAwODQ5LDAuMDI3NzEgLTAuMDEyOTMsMC4wNTYzNCAtMC4wMTI5MywwLjA4NTYzYzAsMC4yNDcwOSAwLjMxNjUzLDAuNDQ3MzkgMC43MDY5OSwwLjQ0NzM5YzAuMjM4MTYsMCAwLjQ0ODgyLC0wLjA3NDUyIDAuNTc2OTIsLTAuMTg4NzN6TTIzOC43MjU5NCwxNzguOTIxMjNjMC4zOTA0NiwwIDAuNzA2OTksLTAuMjAwMzEgMC43MDY5OSwtMC40NDczOWMwLC0wLjAyOTI4IC0wLjAwNDQ1LC0wLjA1NzkxIC0wLjAxMjkzLC0wLjA4NTYzYy0wLjE5MDAxLDAuMTcyNTcgLTAuODIxNTEsMC4zMjU4OCAtMS4yNzA5OCwwLjM0NDI5YzAuMTI4MSwwLjExNDIxIDAuMzM4NzYsMC4xODg3MyAwLjU3NjkyLDAuMTg4NzN6TTIzNy4xOTM0MSwxNzkuODA4ODNsMC4xNjIwOCwtMC4yOTQ5OGwtMC4zMjQxNSwtMC4wODQyOHpNMjM4Ljk1MzA1LDE3OS40Mjk1N2wtMC4zMjQxNSwwLjA4NDI4bDAuMTYyMDgsMC4yOTQ5OHoiIGlkPSJkLXl4MWxnc3BkIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvZz48bWV0YWRhdGE+ZGltb2QtcGFpbnQvMSB7InYiOjEsImF4ZXMiOltdLCJsaW5rcyI6W10sInN3YXRjaGVzIjp7ImVudHJpZXMiOlt7ImZpbGwiOiIjZmZmZmZmIiwiZmlsbDIiOm51bGwsImdyYWRpZW50VHlwZSI6IlNPTElEIiwic3Ryb2tlIjpudWxsLCJzdHJva2VXaWR0aCI6MH0seyJmaWxsIjoiI2Q5ZDlkOSIsImZpbGwyIjpudWxsLCJncmFkaWVudFR5cGUiOiJTT0xJRCIsInN0cm9rZSI6bnVsbCwic3Ryb2tlV2lkdGgiOjB9LHsiZmlsbCI6IiM4MDgwODAiLCJmaWxsMiI6bnVsbCwiZ3JhZGllbnRUeXBlIjoiU09MSUQiLCJzdHJva2UiOm51bGwsInN0cm9rZVdpZHRoIjowfSx7ImZpbGwiOiIjNDA0MDQwIiwiZmlsbDIiOm51bGwsImdyYWRpZW50VHlwZSI6IlNPTElEIiwic3Ryb2tlIjpudWxsLCJzdHJva2VXaWR0aCI6MH0seyJmaWxsIjoiIzIwMjAyMCIsImZpbGwyIjpudWxsLCJncmFkaWVudFR5cGUiOiJTT0xJRCIsInN0cm9rZSI6bnVsbCwic3Ryb2tlV2lkdGgiOjB9LHsiZmlsbCI6IiMwMDAwMDAiLCJmaWxsMiI6bnVsbCwiZ3JhZGllbnRUeXBlIjoiU09MSUQiLCJzdHJva2UiOm51bGwsInN0cm9rZVdpZHRoIjowfSx7ImZpbGwiOiIjZmZkZmRmIiwiZmlsbDIiOm51bGwsImdyYWRpZW50VHlwZSI6IlNPTElEIiwic3Ryb2tlIjpudWxsLCJzdHJva2VXaWR0aCI6MH0seyJmaWxsIjoiI2ZmYmZiZiIsImZpbGwyIjpudWxsLCJncmFkaWVudFR5cGUiOiJTT0xJRCIsInN0cm9rZSI6bnVsbCwic3Ryb2tlV2lkdGgiOjB9LHsiZmlsbCI6IiNmZjk5OTkiLCJmaWxsMiI6bnVsbCwiZ3JhZGllbnRUeXBlIjoiU09MSUQiLCJzdHJva2UiOm51bGwsInN0cm9rZVdpZHRoIjowfSx7ImZpbGwiOiIjZmY4MDgwIiwiZmlsbDIiOm51bGwsImdyYWRpZW50VHlwZSI6IlNPTElEIiwic3Ryb2tlIjpudWxsLCJzdHJva2VXaWR0aCI6MH0seyJmaWxsIjoiI2ZmNDA0MCIsImZpbGwyIjpudWxsLCJncmFkaWVudFR5cGUiOiJTT0xJRCIsInN0cm9rZSI6bnVsbCwic3Ryb2tlV2lkdGgiOjB9LHsiZmlsbCI6IiNmZjAwMDAiLCJmaWxsMiI6bnVsbCwiZ3JhZGllbnRUeXBlIjoiU09MSUQiLCJzdHJva2UiOm51bGwsInN0cm9rZVdpZHRoIjowfSx7ImZpbGwiOiIjYmYwMDAwIiwiZmlsbDIiOm51bGwsImdyYWRpZW50VHlwZSI6IlNPTElEIiwic3Ryb2tlIjpudWxsLCJzdHJva2VXaWR0aCI6MH0seyJmaWxsIjoiI2E2MDAwMCIsImZpbGwyIjpudWxsLCJncmFkaWVudFR5cGUiOiJTT0xJRCIsInN0cm9rZSI6bnVsbCwic3Ryb2tlV2lkdGgiOjB9LHsiZmlsbCI6IiM4MDAwMDAiLCJmaWxsMiI6bnVsbCwiZ3JhZGllbnRUeXBlIjoiU09MSUQiLCJzdHJva2UiOm51bGwsInN0cm9rZVdpZHRoIjowfSx7ImZpbGwiOiIjNTgwMDAwIiwiZmlsbDIiOm51bGwsImdyYWRpZW50VHlwZSI6IlNPTElEIiwic3Ryb2tlIjpudWxsLCJzdHJva2VXaWR0aCI6MH0seyJmaWxsIjoiIzQwMDAwMCIsImZpbGwyIjpudWxsLCJncmFkaWVudFR5cGUiOiJTT0xJRCIsInN0cm9rZSI6bnVsbCwic3Ryb2tlV2lkdGgiOjB9LHsiZmlsbCI6IiMyMDAwMDAiLCJmaWxsMiI6bnVsbCwiZ3JhZGllbnRUeXBlIjoiU09MSUQiLCJzdHJva2UiOm51bGwsInN0cm9rZVdpZHRoIjowfV0sImxvY2siOmZhbHNlLCJvZmYiOnRydWUsInBhbGV0dGVJZCI6ImR4OTc0cHlqIn0sInN5bWJvbHMiOnt9fTwvbWV0YWRhdGE+PC9zdmc+";
const block_icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMTEuOSIgaGVpZ2h0PSI3Mi4yIiB2aWV3Qm94PSIwLDAsMTExLjksNzIuMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIzMjAiIHkxPSIxNTUuNiIgeDI9IjMyMCIgeTI9IjIxNC40IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2E5OWNmNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ1MzBiZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjQuMSwtMTQ4LjgpIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PGc+PHBhdGggZD0iTTMyOS45LDIxMS45YzAsLTQuNSAwLC0xMi43IC0wLjIsLTE4LjNjLTAuMSwwIC0wLjIsMCAtMC40LC0wLjFjLTEsNC4xIC0yLjUsOCAtNC41LDExLjRsLTAuMywwLjV2MGMtNC43LDYuNCAtMTAuMiwxMS4xIC0xNi4zLDE0LjJjLTEuNywwLjkgLTQsMS40IC02LjIsMS40Yy0xLjcsMCAtNC4yLC0wLjMgLTYuMywtMS42Yy0yLjcsLTEuNiAtNC4yLC00LjMgLTQuMiwtNy40di01Mi44YzAsLTEuOCAwLjQsLTUuMSAzLC03LjdjMS43LC0xLjcgNC4xLC0yLjcgNi42LC0yLjdoMC4zYzEwLjcsMC4yIDE5LjUsNS40IDI0LjYsMTQuN2MxLjIsMi4xIDIuMiw0LjUgMi45LDdjMS4zLC0zLjQgNC43LC01LjkgOC42LC01LjljMy45LDAgOS4yLDQuMSA5LjIsOS4yYzAsNS4xIC0wLjUsMy40IC0xLjMsNC44YzIsMS45IDQuMyw1LjkgMywzMy40YzAsNC4zIC0zLjMsOSAtOS4yLDljLTUuOSwwIC05LjMsLTQuNiAtOS4zLC05LjF6TTMwOS44LDE5NC4xYzIuNywtNS42IDMuNSwtMTUuNCAwLjIsLTIxLjdjMCwtMC4xIC0wLjEsLTAuMyAtMC4yLC0wLjR6TTM2NC43LDIwNi40Yy0xLjUsMCAtMi45LC0wLjQgLTQuMiwtMS4xbC03LjIsLTMuOGMtMC43LC0wLjQgLTIsLTEuMiAtMy4xLC0yLjdjLTEuOSwtMi43IC0yLjEsLTYuMSAtMC41LC05LjFjMC4zLC0wLjYgMC43LC0xLjIgMS4xLC0xLjdjLTAuMywtMC45IC0wLjUsLTEuOSAtMC41LC0zYzAsLTEuMSAwLjIsLTIuMSAwLjUsLTNjLTAuNCwtMC41IC0wLjgsLTEuMSAtMS4xLC0xLjdjLTEuMiwtMi4zIC0xLjQsLTQuOCAtMC42LC03LjFjMC43LC0yIDIuMywtMy43IDQuMiwtNC44bDcuMiwtMy44YzAuNywtMC40IDIuMSwtMSA0LC0xaDAuMmMzLjIsMCA2LjEsMS43IDcuNyw0LjdjMS44LDMuMyAxLjIsNi43IC0wLjYsOS4yYzIuNCwxLjQgNC4yLDQgNC4yLDcuNWMwLDMuNSAtMS44LDYuMSAtNC4yLDcuNWMxLjgsMi41IDIuNCw1LjkgMC42LDkuMmMtMS42LDIuOSAtNC40LDQuNyAtNy42LDQuN3pNMjY3LjcsMjAxLjdjLTEuOCwtMy4zIC0xLjIsLTYuNyAwLjYsLTkuMmMtMi40LC0xLjQgLTQuMiwtNCAtNC4yLC03LjVjMCwtMy41IDEuOCwtNi4xIDQuMiwtNy41Yy0xLjksLTIuNiAtMi4yLC02LjEgLTAuNiwtOS4yYzEuMSwtMiAyLjgsLTMuNSA0LjksLTQuMmMwLjksLTAuMyAxLjgsLTAuNSAyLjgsLTAuNWMxLjQsMCAyLjksMC40IDQuMiwxLjFsNy4yLDMuOGM0LjQsMi4zIDYsNy40IDMuNiwxMS44Yy0wLjMsMC42IC0wLjcsMS4yIC0xLjEsMS43YzAuMywwLjkgMC41LDIgMC41LDNjMCwxIC0wLjIsMi4xIC0wLjUsM2MwLjQsMC41IDAuOCwxLjEgMS4xLDEuN2MxLjIsMi4zIDEuNCw0LjggMC42LDcuMWMtMC43LDIgLTIuMywzLjcgLTQuMiw0LjhsLTcuMiwzLjhjLTEuMywwLjcgLTIuODAxOTQsMS4wMjYzOCAtNC4yLDEuMWMtMi4yMTc0NCwwLjExNjc3IC02LjIsLTEuOCAtNy43LC00Ljh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTMzMi42LDIxMS45YzAsLTMuMiAtMC4xLC0xNC43IC0wLjIsLTIwLjd2MGMtMS44LDAgLTMuNiwtMC43IC00LjksLTIuMWMtMC43LDUuMSAtMi40LDEwLjEgLTQuOSwxNC4zbC0wLjIsMC4zYy00LjUsNiAtOS43LDEwLjQgLTE1LjQsMTMuM2MtMi42LDEuMyAtNy4xLDEuNiAtOS45LC0wLjFjLTEuOCwtMS4xIC0yLjksLTMgLTIuOSwtNS4xdi01Mi42YzAsLTEuMyAwLjMsLTMuOCAyLjIsLTUuN2MxLjIsLTEuMyAyLjksLTEuOSA0LjgsLTEuOXYwYzkuNywwLjIgMTcuNyw0LjkgMjIuMywxMy4zYzIuNCw0LjQgMy44LDkuNiA0LjIsMTVjMS4zLC0xLjIgMywtMS44IDQuNiwtMS44aDAuMWMtMSwtMS4xIC0xLjYsLTIuNiAtMS42LC00LjNjMCwtMy42IDIuOSwtNi41IDYuNSwtNi41YzMuNiwwIDYuNSwyLjkgNi41LDYuNWMwLDMuNiAtMS4xLDQuMSAtMi43LDUuM2MwLjcsMC4zIDEuMywwLjcgMS44LDEuMWMxLjMsMS4yIDMuOCwzLjQgMi42LDMxLjdjMCwzLjEgLTIuMyw2LjQgLTYuNSw2LjRjLTQuMiwwIC02LjQsLTMuMiAtNi40LC02LjR6TTMwNy4xLDE2NS43djM1LjdjMS42LC0xLjQgMy4xLC0zLjEgNC41LC01YzMuNiwtNi4xIDQuNywtMTcuNyAwLjgsLTI1LjNjLTEuMywtMi41IC0zLjEsLTQuMyAtNS4zLC01LjR6TTM2MS43LDIwM3YwbC03LjIsLTMuOGMtMC40LC0wLjIgLTEuNCwtMC44IC0yLjIsLTEuOWMtMS4zLC0xLjggLTEuNCwtNC4yIC0wLjMsLTYuM2MwLjUsLTEgMS4zLC0xLjggMi4xLC0yLjNjLTAuNywtMC45IC0xLjEsLTIuMiAtMS4xLC0zLjZjMCwtMS40IDAuNCwtMi43IDEuMSwtMy42Yy0wLjgsLTAuNiAtMS42LC0xLjMgLTIuMSwtMi4zYy0xLjgsLTMuNSAwLC02LjggMi41LC04LjJsNy4yLC0zLjhjMC40LC0wLjIgMS40LC0wLjcgMi44LC0wLjdjMi4zLDAgNC4zLDEuMiA1LjQsMy4yYzEuOCwzLjUgMCw2LjggLTIuNSw4LjJsLTIuMiwxLjJoMmMyLjksMCA2LjEsMi4xIDYuMSw2LjFjMCw0IC0zLjEsNi4xIC02LjEsNi4xaC0ybDIuMiwxLjJjMi42LDEuNCA0LjQsNC43IDIuNSw4LjJjLTEuMiwyLjMgLTMuMiwzLjIgLTUuMiwzLjJjMCwwIC0yLjEsLTAuNSAtMywtMC45ek0zNjUuNSwxOTUuOXYwek0yNzUuMywyMDMuN2MtMiwwIC00LC0xIC01LjIsLTMuMmMtMS44LC0zLjUgMCwtNi44IDIuNSwtOC4ybDIuMiwtMS4yaC0yYy0yLjksMCAtNi4xLC0yLjEgLTYuMSwtNi4xYzAsLTQgMy4xLC02LjEgNi4xLC02LjFoMS43Yy0wLjcsLTAuNCAtMS41LC0wLjggLTIuMywtMS40Yy0yLjksLTEuOSAtMy44LC01LjEgLTIuMiwtOGMwLjcsLTEuNCAxLjksLTIuNCAzLjQsLTIuOWMxLjYsLTAuNSAzLjMsLTAuNCA0LjgsMC40bDcuMiwzLjhjMy4xLDEuNiA0LjIsNS4xIDIuNSw4LjJjLTAuNSwxIC0xLjIsMS43IC0yLjEsMi4zYzAuNywwLjkgMS4xLDIuMiAxLjEsMy42YzAsMS40IC0wLjQsMi43IC0xLjEsMy42YzAuOCwwLjUgMS42LDEuMyAyLjEsMi4zYzEuOCwzLjUgMCw2LjggLTIuNSw4LjJsLTcuMiwzLjhjLTAuOSwwLjUgLTIuOSwwLjg5OTk5IC0yLjksMC44OTk5OXpNMjgxLjcsMTkyLjF2MHoiIGZpbGw9InVybCgjY29sb3ItMSkiLz48L2c+PHBhdGggZD0iTTI3Mi44LDE4Mi45aDguMWMwLDAgMi4xLDAgMi4xLDIuMWMwLDIuMSAtMi4xLDIuMSAtMi4xLDIuMWgtOC4xYzAsMCAtMi4xLDAgLTIuMSwtMi4xYzAsLTIuMSAyLjEsLTIuMSAyLjEsLTIuMXpNMjc2LjMsMTcwLjZjMi43LDEuNCA0LjUsMi40IDcuMiwzLjhjMCwwIDEuOCwxIDAuOSwyLjhjLTAuOSwxLjggLTIuOCwwLjkgLTIuOCwwLjljLTIuNywtMS40IC03LjIsLTMuOCAtNy4yLC0zLjhjMCwwIC0xLjgsLTEgLTAuOSwtMi44YzAuOSwtMS44IDIuOCwtMC45IDIuOCwtMC45ek0yODEuNiwxOTJjMCwwIDEuOCwtMSAyLjgsMC45YzEsMS44IC0wLjksMi44IC0wLjksMi44Yy0yLjcsMS40IC00LjUsMi40IC03LjIsMy44YzAsMCAtMS44LDEgLTIuOCwtMC45Yy0xLC0xLjggMC45LC0yLjggMC45LC0yLjhjMCwwIDQuNSwtMi40IDcuMiwtMy44ek0zNTkuMSwxODcuMWMwLDAgLTIuMSwwIC0yLjEsLTIuMWMwLC0yLjEgMi4xLC0yLjEgMi4xLC0yLjFoOC4xYzAsMCAyLjEsMCAyLjEsMi4xYzAsMi4xIC0yLjEsMi4xIC0yLjEsMi4xek0zNTguNCwxNzguMWMwLDAgLTEuOCwxIC0yLjgsLTAuOWMtMSwtMS44IDAuOSwtMi44IDAuOSwtMi44YzIuNywtMS40IDQuNSwtMi40IDcuMiwtMy44YzAsMCAxLjgsLTEgMi44LDAuOWMxLDEuOCAtMC45LDIuOCAtMC45LDIuOGMwLDAgLTQuNSwyLjQgLTcuMiwzLjh6TTM2My42LDE5OS40Yy0yLjcsLTEuNCAtNC41LC0yLjQgLTcuMiwtMy44YzAsMCAtMS44LC0xIC0wLjksLTIuOGMwLjksLTEuOCAyLjgsLTAuOSAyLjgsLTAuOWMyLjcsMS40IDcuMiwzLjggNy4yLDMuOGMwLDAgMS44LDEgMC45LDIuOGMtMC45LDEuOCAtMi44LDAuOSAtMi44LDAuOXpNMzE0LjksMTk4LjZjNywtMTEuNiA1LjYsLTM2LjggLTExLjksLTM4djQ4LjRjNC43LC0yLjQgOC43LC02LjIgMTEuOSwtMTAuNHpNMzAxLjIsMTU1LjZjMjMuMywwLjUgMjcuNSwyOS45IDE3LjksNDUuOGMtMy44LDUgLTguNCw5LjMgLTE0LDEyLjJjLTIsMSAtNywxLjEgLTcsLTEuN3YtNTIuN2MwLC0xLjYgMC43LC0zLjcgMy4xLC0zLjZ6TTMzNi42LDIxMS45YzAsLTUuMSAtMC4yLC0yNC43IC0wLjIsLTI0LjdjMCwwIC0yLjcsMCAtNC4xLDBjMCwwIC0yLjUsMCAtMi41LC0yLjVjMCwtMi41IDIuNSwtMi41IDIuNSwtMi41YzIsMCA2LjUsLTAuMiA4LjEsMS4xYzIuNCwyLjEgMS4yLDI4LjUgMS4yLDI4LjVjMCwwIDAsMi41IC0yLjUsMi41Yy0yLjUsMCAtMi41LC0yLjUgLTIuNSwtMi41djB6TTMzNC45LDE3NGMwLC0xLjQgMS4xLC0yLjUgMi41LC0yLjVjMS40LDAgMi41LDEuMSAyLjUsMi41YzAsMS40IC0xLjEsMi41IC0yLjUsMi41Yy0xLjQsMCAtMi41LC0xLjEgLTIuNSwtMi41eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9zdmc+";

Scratch.extensions.register(new Extension());
})(Scratch)