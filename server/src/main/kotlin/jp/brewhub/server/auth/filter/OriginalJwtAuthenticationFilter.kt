package jp.brewhub.server.auth.filter

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import jp.brewhub.server.auth.authentication.OriginalJwtAuthentication
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.oauth2.server.resource.web.DefaultBearerTokenResolver
import org.springframework.web.filter.OncePerRequestFilter

class OriginalJwtAuthenticationFilter(
    private val authenticationManager: AuthenticationManager,
): OncePerRequestFilter() {
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val bearerTokenResolver = DefaultBearerTokenResolver()
        try {
            val accessToken = bearerTokenResolver.resolve(request)
            val unauthenticatedToken = OriginalJwtAuthentication.unauthenticated(accessToken)
            val authentication = authenticationManager.authenticate(unauthenticatedToken)
            SecurityContextHolder.getContext().authentication = authentication
            println("Current Authentication: $authentication")
        } catch(_: Exception) {
            SecurityContextHolder.clearContext()
        }
        doFilter(request, response, filterChain)
    }
}