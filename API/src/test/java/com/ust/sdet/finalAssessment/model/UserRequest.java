package com.ust.sdet.finalAssessment.model;

import java.util.List;

public record UserRequest(String userID, String username, List books) {
}
