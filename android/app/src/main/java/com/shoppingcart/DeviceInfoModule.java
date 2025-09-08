package com.shoppingcart;

import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.HashMap;
import java.util.Map;

public class DeviceInfoModule extends ReactContextBaseJavaModule {

    public DeviceInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        android.util.Log.d("DeviceInfoModule", "DeviceInfoModule initialized");
    }

    @Override
    public String getName() {
        return "CustomDeviceInfo";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        String version = "Android " + Build.VERSION.RELEASE;
        android.util.Log.d("DeviceInfoModule", "Returning constants: " + version);
        constants.put("osVersion", version);
        return constants;
    }

    @ReactMethod
    public void getOSVersion(Promise promise) {
        try {
            String version = "Android " + Build.VERSION.RELEASE;
            promise.resolve(version);
        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage());
        }
    }
}
