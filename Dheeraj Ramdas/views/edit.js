<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Chat</title>
</head>
<body>
    <h3>Edit your chat: <%=chat._id%></h3>
    <p>This chat was sent from <%=chat.from%> to <%=chat.to%></p>
    <form method="POST" action="/chats/<%= chat._id %>?_method=PUT">
        <textarea name="msg" rows="5" cols="15"><%= chat.msg%></textarea>
        <br/>
        <Button>Edit</Button>
    </form>
</body>
</html>
