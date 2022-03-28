package helpers

import (
	"errors"
	"fmt"

	"github.com/gin-gonic/gin"
)

func CheckUserType(c *gin.Context, role string) (err error) {
	userType := c.GetString("user_type")
	fmt.Println(role)
	err = nil
	if userType != role {
		err = errors.New("unathorized to access this resource")
		return err
	}
	return err
}

func MatchuserTypeToUid(c *gin.Context, userId string) (err error) {
	userType := c.GetString("user_type")
	uid := c.GetString("uid")
	err = nil

	if userType == "USER" && uid != userId {
		err = errors.New("unathorized to access this resource")
		return err
	}
	err = CheckUserType(c, userType)
	fmt.Println(err)
	return err
}
