---
title: Unlocking the Power of Status Codes
date: 2024-08-22
excerpt: HTTP status codes are often misused, under-utilized, or over-utilized. Here's a practical, standardised list that reduces confusion and speeds up debugging.
---

## Introduction

HTTP status codes are often misused, under-utilized, or even over-utilized, leading to confusion among developers, frustrating user experiences, and increased costs for businesses. Imagine making a request to an API and receiving a 500 Internal Server Error with no further information. What went wrong? Was it your fault? Was it a server issue? The ambiguity can waste hours of debugging time.

Or consider this: you attempt to access a restricted resource and receive a 401 Unauthorized, even though you're logged in. The real problem is that your account doesn't have the right permissions, but instead of receiving a 403 Forbidden status, you're left scratching your head, wondering if your login failed.

These common scenarios highlight why it's crucial to use status codes effectively. If you're involved in API development, I propose defining a standardised list of codes for your team, narrowing down the official HTTP Specification to what's practical and clear. Building your API to be fully spec-compliant can actually impede its usability, forcing developers to spend more time deciphering responses, costing time, money, and user satisfaction.

It's important to strike a balance between conforming to the spec and providing enough precision so that errors make sense to users. We can always extend with additional codes when needed and some integrations demand this. When starting from scratch, keep the list of status codes tight to boost usability and reduce confusion.

The error codes covered include:

- **2xx** — Successful response
- **4xx** — User errors
- **5xx** — Server errors

First, let's look at what type of problems we get into when implementing HTTP Status Codes.

## Misuse

When a status code is returned but does not encapsulate the error message returned in the body response.

**Example**

As a USER I make the call `GET /admins/123` with a valid Authorization header. The API responds with:

```
401 Unauthorized
{ "error": "Missing permissions" }
```

The API understands that I am authenticated, but as the request is from a USER the error tells me I don't have sufficient permission. 401 Unauthorized does not match the response I received. Since the request was authenticated but forbidden then I should have received 403 Forbidden.

It is important to make a difference between authentication errors and forbidden errors because they mean very different things. *Authenticated* means the API knows who you are because you have provided a valid set of credentials. *Forbidden* means you are implicitly authenticated but still denied access, usually due to permissions.

This informs developers when they use the API because receiving a 401 Unauthorized implies credentials are not provided correctly. If an API tells me that I am unauthenticated when really they meant to say I was forbidden then a developer might waste hours trying to fix the issue.

> **Note** — This is traditionally discussed as a problem of authentication vs authorization however 401 Unauthorized in the HTTP spec refers to an authentication issue for the user.

## Over-utilisation

When uncommon status codes are returned when a more well-known code is available instead.

**Example**

I want to create a new user with the request: `POST /users/123 name=123`. However I have incorrectly supplied a numeric ID as the name. The error returned is:

```json
422 Unprocessable Content
{
  "message": "Validation Failed",
  "errors": [
    {
      "field": "name",
      "code": "not_string"
    }
  ]
}
```

Plenty of developers would be unfamiliar with a 422 Unprocessable Content response and this could confuse them. For something like a validation error, it would be preferable to see a 400 Bad Request which is much more common.

According to the official HTTP Spec, we should be returning 400 Bad Request when the request body is malformed — like if we sent XML to a JSON API. Adhering to the spec might have value, but generally, it is excessive and convoluted to be that specific on validation errors. Developers are forced to spend their valuable time understanding the status code.

In the example, we have access to the response body which gives a detailed error, but sometimes the body can be obfuscated or requires extra debugging. Generally our libraries and API clients will point out syntax errors so a 400 Bad Request is going to make it super-obvious that we've supplied invalid fields.

By limiting validation errors we also encourage consistency within an organisation. Teams might interpret the HTTP spec differently and we end up with a mix of 400 Bad Request and 422 Unprocessable Content errors depending on which internal API is used. This inevitably adds more questions, more discussion and costs teams more time.

> **Note** — Some large APIs do conform to this spec, for example GitHub, but for the majority of cases, just keep it simple.

## Under-utilization

When the status code returned does not provide enough information on what happened even when there are valid status codes that could be used.

**Example**

I make a `GET /users/123` request. The server code calls out to a 3rd party service like Auth0 but the call fails and the following error is returned:

```json
500 Internal Server Error
{ "error": "Something went wrong" }
```

The 5xx class of error is hard to get information from. Most APIs obfuscate any error from the HTTP response to avoid leaking any private information about the error. Naturally, most developers would default to returning 500 Internal Server Error but this is doing a disservice to the user. There is information we can use to at least tell the user it is not their fault, or the server's fault, but the fault of a 3rd party.

I would suggest we return 502 Bad Gateway instead. This is going to inform whoever is using the API that the server itself is fine, but that a downstream server is causing issues. The implication is that the 502 Bad Gateway will resolve itself in time, whereas a 500 Internal Server Error could go on indefinitely.

Equally, we might implement short circuiting requests against 3rd parties that are taking too long and return 504 Gateway Timeout. This will inform of a dependency failure as well as indicating request times will be lengthened.

For any support staff maintaining our server there is also a benefit. When the errors come in through our monitoring system, the 502 and 504 codes will inform the staff that fault lies with the dependency and we can get a head start in diagnosing the issue.

## General Usage List

This article is not about persuading you to disregard all status codes except the ones listed, it is more about pushing you to leverage a base set more effectively. Depending on your software and team you might have a hard requirement for more status codes. Your needs developing service-to-service APIs versus developing browser-service will have an effect on how you use status codes.

Below you can find a suggestion of sensible defaults.

### 2xx Successful Responses

Stick to one status code for successful requests. All other status codes require one more task for an API developer to build and one more path to check for a consumer.

**200 OK**
The server processed the request successfully and returned a response. Your transaction completed successfully, there may be some data you can use in the response, or none at all.

### 4xx User Error

In this range we want to tell the user that it is their problem to fix the request.

**400 Bad Request**
The request is authenticated but failed validation. You have supplied invalid data to the API, this might include badly formatted JSON or incorrect types on values.

**401 Unauthorized**
We don't know who you are, you can't access this endpoint. You didn't send a valid set of credentials, maybe you didn't send the Authorization header or it's malformed.

**403 Forbidden**
We know who you are, but you aren't allowed to do this. The credentials are being sent fine but they are missing permissions. For example, maybe you are trying to assign admin permission but your account has insufficient access.

**404 Not Found**
The resource requested does not exist. I am trying to access a user at `GET /users/1` and user with ID 1 does not exist.

**405 Method Not Allowed**
The endpoint is not defined. You sent the wrong HTTP method or your URL path is wrong.

**429 Too Many Requests**
You have broken an agreed API rate limit. You need to wait and try again.

### 5xx Server Error

This range tells the user the server itself is having a problem, that they can't fix it themselves.

**500 Internal Server Error**
Something unexpected happened. There is an error case we are not handling, the team needs to investigate and provide error handling for it.

**502 Bad Gateway**
A 3rd party dependency is failing for some reason. This isn't a bug or a user fault, something outside the server has started to fail.

**503 Service Unavailable**
This is expected, the request can not be processed. We have anticipated this error and it will have appropriate documentation. For example, we are performing scheduled database maintenance and the server can not process the request.

**504 Gateway Timeout**
A 3rd party dependency timed out. We made an early timeout because a dependency is slowing the request down, this should get better shortly.

> **Note** — 3xx codes are not discussed here since they involve redirecting the request and are generally not open to interpretation.

## Conclusion

By introducing our own restricted list of codes we get the benefits of:

- Reducing the time spent on discussions within your organisation as developers don't need to consider what to return.
- Increasing consumer development velocity by increasing developer intuition.
- Reducing debugging complexity since status codes have a precise definition and allow support staff to get a head start on the issue.

Additional status codes can be introduced to our list but we must ensure they are well documented and serve a real benefit beyond conforming to the HTTP spec.
