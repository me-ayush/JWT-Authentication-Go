package main

import (
	"os"

	"github.com/gin-gonic/gin"
)

func func1(res *gin.Context) {
	res.JSON(200, gin.H{"success:": "Access Granted For API-1"})
}

func func2(res *gin.Context) {
	res.JSON(200, gin.H{"success:": "Access Granted For API-2"})
}

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "3000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	// routes.AuthRoutes(router)
	// routes.UserRoutes(router)

	router.GET("/api-1", func1)
	router.GET("/api-2", func2)

	router.Run(":" + port)
}
