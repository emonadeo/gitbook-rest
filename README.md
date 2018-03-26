# GitBook REST Plugin

Document visually appealing REST applications using the HTTP Methods, `GET`, `POST`, `PUT`, `PATCH` and `DELETE` while providing an additional description.

![](https://i.imgur.com/O34NfbN.png)

## Usage

Every set of HTTP Methods is contained in a block named `rest`:

```
{% rest %}
  ...
{% endrest %}
```

Now you can add the different HTTP Operations in a similar manner inside that block. A single line looks like this in GitBook Markdown:

```
{% http-method "url" %}
    description
```

You can put as many as you want of them inside your previously created REST-Block. Using books as an example the complete piece of Markdown can look like this:

```
{% rest %}

  {% get "/store/books/{id}" %}
    Finds book by ID
    
  {% post "/store/books" %}
    Adds a book to the store
    
  {% delete "/store/books" %}
    Deletes a book from the store
    
{% endrest %}
```