package com.supplyhouse.bean;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RestResponseBean {

	String message;
	List<SpecialHours> data;

}
