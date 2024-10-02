package jp.brewhub.server.auth.authentication

data class AcquireAccessTokenUser(
    val subject: String,
    val name: String,
)
